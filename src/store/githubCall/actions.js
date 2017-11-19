import { createActions } from 'redux-actions';
import apiCall from 'api';
import * as API from 'constants/API_ROOT';
import * as TYPES from '../actionTypes';
import * as selectors from './selectors';

export const {
	githubUserFetchRequest,
	githubUserFetchSuccess,
	githubUserFetchFailure,
} = createActions(
	TYPES.GITHUB_USER_FETCH_REQUEST,
	TYPES.GITHUB_USER_FETCH_SUCCESS,
	TYPES.GITHUB_USER_FETCH_FAILURE,
);

export const githubFetch = userName => (dispatch, getState) => {
	if (selectors.githubCallSelector(getState())) {
		return Promise.reject();
	}

	dispatch(githubUserFetchRequest());

	return apiCall(`/users/${userName}`, {
		baseURL: API.GITHUB_API,
	})
		.then(
			(data) => {
				dispatch(githubUserFetchSuccess(data));
			},
			(error) => {
				dispatch(githubUserFetchFailure(error));
			},
		);
};
