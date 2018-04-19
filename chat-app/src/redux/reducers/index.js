import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import ChatReducer from './ChatReducer';

let CombineReducer = combineReducers({
    login: LoginReducer,
    chatObj: ChatReducer,
});

export default CombineReducer;