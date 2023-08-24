import { useReducer, createContext, useEffect, useContext } from 'react';
import type { Dispatch } from 'react';
import http from './utils/http';
import useAlert from './pages/Alert';
import { AlertColor } from '@mui/material/Alert';

type initStateType = {
  name: string;
  email: string;
  age?: number;
  manager?: boolean;
  unId: string;
  avatar: string;
  gender?: string;
  birth?: string;
  phone?: string;
  timestamp?: number;
  showAlert: (val: string, type?: AlertColor) => void;
  logout: () => void;
  profile: () => void;
};
const initState: initStateType = {
  name: '',
  email: '',
  unId: '',
  avatar: '',
  gender: '',
  birth: '',
  phone: '',
  showAlert: () => {},
  logout: () => {},
  profile: () => {},
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
      return { ...state, name: '', email: '', unId: '', avatar: '' };
    case ACTION_TYPE.UPDATE_USER:
      return { ...state, ...payload };
  }
  return state;
};

type contextUserType = {
  userStore: initStateType;
  dispatchUserStore?: Dispatch<actionType>;
};
export const contextUser = createContext<contextUserType>({ userStore: initState });

export default function (props: any) {
  const { children } = props;
  const { Provider } = contextUser;
  const { showAlert, AlertMessage } = useAlert();
  const userStoreContext = useContext(contextUser);
  const [userStore, dispatchUserStore] = useReducer(reducerFn, {
    ...userStoreContext,
    showAlert,
    logout: () => {
      http('delete', '/user/logout').then((res) => {
        if (res.code === 0) {
          dispatchUserStore({ type: ACTION_TYPE.RESET_USER });
        }
      });
    },
    profile: () => {
      http('get', '/user/profile').then((res) => {
        if (res.code === 0) {
          dispatchUserStore({ type: ACTION_TYPE.UPDATE_USER, payload: res.data });
        }
      });
    },
  });

  useEffect(() => {
    userStore.profile();
  }, []);

  return (
    <Provider value={{ userStore, dispatchUserStore }}>
      <AlertMessage />
      {children}
    </Provider>
  );
}
