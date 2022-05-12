import {Middleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {configureStore, MiddlewareArray} from '@reduxjs/toolkit';
import rootReducer from '../reducers/Reducer';
import saga from '../../List/saga/index';

const sagaMiddleware = createSagaMiddleware();
const middlewares: Middleware[] = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray().concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(saga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export {store, sagaMiddleware};
