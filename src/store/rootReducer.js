import { combineReducers } from 'redux-immutable';
import apiCall from './apiCall/reducers';
import counter from './counter/reducers';

const rootReducer = combineReducers({
  apiCall,
  counter,
});

export default rootReducer;
