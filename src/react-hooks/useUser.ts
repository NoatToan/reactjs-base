import { useSelector } from 'react-redux';
import { useAppDispatch } from './hooks';
import { userActions, selectUser } from '../react-slices/userSlice';

export const useUser = () => {
  const dispatch = useAppDispatch();
  const userState = useSelector(selectUser);

  const getUser = (params: any, onSuccess: Function, onError: Function) => {
    dispatch(
      userActions.getUser({
        params,
        onSuccess,
        onError,
      })
    );
  };

  const login = (params: any, onSuccess: any, onError: any) => {
    dispatch(
      userActions.login({
        params,
        onSuccess,
        onError,
      })
    );
  };

  return {
    getUser,
    login,
    userState,
  };
};
