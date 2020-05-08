import { combineReducers } from 'redux';
//when we import the userReducer we can passed in to combineReducer as an object

import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
});