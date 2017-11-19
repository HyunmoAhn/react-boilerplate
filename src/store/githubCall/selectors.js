import { createSelector } from 'reselect';

export const githubCallSelector = state => state.get('githubCallSelector');

export const isFetchSelector = createSelector(
	githubCallSelector,
	githubCall => githubCall.get('isFetch'),
);