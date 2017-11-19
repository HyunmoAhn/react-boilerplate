import { combineActions, handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = false;

const isFetchReducer = handleActions({
	[actions.githubUserFetchRequest]: () => false,
	[combineActions(
		actions.githubUserFetchSuccess,
		actions.githubUserFetchFailure,
	)]: () => true,
}, initialState);

export default isFetchReducer;