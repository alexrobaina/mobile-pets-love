import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

// Reducers
import rootReducer from './rootReducer';

// Sagas
import rootSaga from './sagas';

let sagaMiddleware = createSagaMiddleware();

const customizedDefaultMiddlware = getDefaultMiddleware({
  serializableCheck: false,
  immutableCheck: false,
});

const middleware = [];
const enhancers = [];

middleware.push(sagaMiddleware);

const store = configureStore({
  reducer: rootReducer,
  middleware: [...customizedDefaultMiddlware, ...middleware],
  devTools: false,
});

sagaMiddleware.run(rootSaga);

export default store;
