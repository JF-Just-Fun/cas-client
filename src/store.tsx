import { useReducer, createContext, useEffect, useContext } from 'react';
import type { Dispatch } from 'react';
import http from './utils/http';
import useAlert from './pages/Alert';
import { AlertColor } from '@mui/material/Alert';

type initStateType = {
  name: string;
  email: string;
  manager: boolean;
  unId: string;
  avatar: string;
  gender: string;
  birth: string;
  phone: string;
  isLoading: boolean;
  showAlert: (val: string, type?: AlertColor | undefined) => void;
  logout: () => void;
  profile: () => void;
};
const initState: initStateType = {
  name: '',
  email: '',
  manager: false,
  unId: '',
  avatar: '',
  gender: '',
  birth: '',
  phone: '',
  isLoading: true,
  showAlert: (val) => {},
  logout: () => {},
  profile: () => {},
};

export enum ACTION_TYPE {
  UPDATE_USER = 'update_user_info',
  RESET_USER = 'reset_user_info',
  SET_LOADING = 'set_loading',
}

type GlobalFnType = {
  showAlert: (val: string, type?: AlertColor | undefined) => void;
  logout: () => void;
  profile: () => void;
};

type ReducerInitialStateType = GlobalFnType & initStateType;

interface ActionType {
  payload?: Partial<ReducerInitialStateType>;
  type: ACTION_TYPE;
}

type contextUserType = {
  userStore: ReducerInitialStateType;
  dispatchUserStore?: Dispatch<ActionType>;
};

export const contextUser = createContext<contextUserType>({ userStore: initState });

export default function (props: any) {
  const { children } = props;
  const { Provider } = contextUser;
  const { showAlert, AlertMessage } = useAlert();
  const userStoreContext = useContext(contextUser);

  const reducerFn = (state: ReducerInitialStateType, action: ActionType): ReducerInitialStateType => {
    const { payload, type } = action;
    switch (type) {
      case ACTION_TYPE.RESET_USER:
        return { ...state, name: '', email: '', unId: '', avatar: '' };
      case ACTION_TYPE.UPDATE_USER:
        return { ...state, ...payload };
      case ACTION_TYPE.SET_LOADING:
        return { ...state, isLoading: payload?.isLoading ?? false };
    }
  };

  const initializerArg: ReducerInitialStateType = {
    ...userStoreContext.userStore,
    showAlert,
    logout: () => {
      http('delete', '/user/logout').then((res) => {
        if (res.code === 0) {
          dispatchUserStore({ type: ACTION_TYPE.RESET_USER });
          dispatchUserStore({ type: ACTION_TYPE.SET_LOADING, payload: { isLoading: true } });
        }
      });
    },
    profile: () => {
      const url = window.location.search;
      const regex = /callbackUrl=([^&]+)/;
      const match = url.match(regex);
      const callbackUrlParam = match && match[1];
      http('get', '/user/profile',{ callbackUrlParam }).then((res) => {
        if (res.code === 0) {
          dispatchUserStore({ type: ACTION_TYPE.UPDATE_USER, payload: res.data });
          dispatchUserStore({ type: ACTION_TYPE.SET_LOADING, payload: { isLoading: true } });
          if(res.callbackUrl!==''){
            window.location.href = res.callbackUrl
          }
        }
      });
    },
  };

  const [userStore, dispatchUserStore] = useReducer(reducerFn, initializerArg);

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
