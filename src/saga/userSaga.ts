import { call, put } from 'redux-saga/effects';
import userAPI from '../api/userAPI';
import { userActions } from '../slices/userSlice';

interface sagaPayload {
  type: string;
  payload: {
    params: any;
    onSuccess: (response: any) => void;
    onError: (error: any) => void;
  };
}

export function* getUserSaga({ type, payload }: sagaPayload): any {
  const { params, onSuccess, onError } = payload;

  const res = yield call(userAPI.getAuth);
  if (res) {
    yield put(userActions.setUser(res));
    onSuccess(res);
  }
  onError(res);
}

export function* userLoginSaga({ type, payload }: sagaPayload): any {
  const { params, onSuccess, onError } = payload;

  const res = yield call(userAPI.login, params);
  if (res) {
    yield put(userActions.setUser(res));
    onSuccess(res);
    return;
  }

  onError(res);
}
