import CombineReducer from './reducers/index';
import { createStore, applyMiddleware  } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

let middleware = applyMiddleware(logger,thunk);

let ConfigureStore = createStore(CombineReducer, {}, middleware);

export default ConfigureStore;
