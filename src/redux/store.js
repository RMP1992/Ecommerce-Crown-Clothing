import { createStore, applyMiddleware } from 'redux';
//the middleware catches the actions and console logs them before they are passed to the root reducer
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))
//applyMiddleware spreads all of the values in middlewares array as individual values

export default store;