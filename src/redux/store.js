import { createStore, applyMiddleware } from 'redux';
//the middleware catches the actions and console logs them before they are passed to the root reducer
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
//applyMiddleware spreads all of the values in middlewares array as individual values
export const persistor = persistStore(store)
 
export default {store, persistor};