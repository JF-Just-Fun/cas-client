import { useReducer, createContext, useEffect } from 'react';
import type { Dispatch } from 'react';
import http from './utils/http';
import useAlert from './pages/Alert';

type initStateType = {
  name?: string;
  email?: string;
  age?: number;
  manager?: boolean;
  unId?: string;
  avatar?: string;
  timestamp?: number;
  showAlert?: (val: string) => void;
};
const initState: initStateType = {
  name: '',
  email: '',
  unId: '',
  avatar: '',
};

export enum ACTION_TYPE {
  UPDATE_USER = 'update_user_info',
  RESET_USER = 'reset_user_info',
}

type actionType = {
  payload: any;
  type: string;
};
const reducerFn = (state: initStateType, action: any) => {
  const { payload, type } = action;
  switch (type) {
    case ACTION_TYPE.RESET_USER:
      return { ...initState };
    case ACTION_TYPE.UPDATE_USER:
      return payload;
  }
  return state;
};

type contextUserType = {
  userStore?: initStateType;
  dispatchUserStore?: Dispatch<actionType>;
};
export const contextUser = createContext<contextUserType>({});

export default function (props: any) {
  const { children } = props;
  const { Provider } = contextUser;
  const { showAlert, AlertMessage } = useAlert();
  const [userStore, dispatchUserStore] = useReducer(reducerFn, {
    ...initState,
    showAlert,
  });

  useEffect(() => {
    http('get', '/user/profile').then((res) => {
      if (res.code === 0) {
        dispatchUserStore({ type: ACTION_TYPE.UPDATE_USER, payload: res.data });
      }
    });
  }, []);

  return (
    <Provider value={{ userStore, dispatchUserStore }}>
      <AlertMessage />
      {children}
    </Provider>
  );
}
