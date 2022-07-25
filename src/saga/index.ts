import { takeEvery } from 'redux-saga/effects';
import { userActions } from '../slices/userSlice';
import { getUserSaga, userLoginSaga } from './userSaga';

/**
 * Where trigger all of side effects
 */
export default function* rootSaga() {
  yield takeEvery(userActions.getUser.type, getUserSaga);
  yield takeEvery(userActions.login.type, userLoginSaga);
}
