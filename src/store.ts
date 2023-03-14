import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import userReducer from './react-slices/userSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './react-saga/rootSaga';

// disalbe thunk and add redux-saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  sagaMiddleware,
];

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
