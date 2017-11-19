import { combineReducers } from 'redux-immutable';
import isFetch from './isFetch';

const githubCall = combineReducers(
	isFetch,
);

export default githubCall;