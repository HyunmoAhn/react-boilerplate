import { combineReducers } from 'redux-immutable';
import apiCall from './apiCall/reducers';
import counter from './counter/reducers';
import modal from './modal/reducers';

const rootReducer = combineReducers({
  apiCall,
  counter,
  modal,
});

export default rootReducer;
