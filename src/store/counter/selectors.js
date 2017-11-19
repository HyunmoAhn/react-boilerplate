import { createSelector } from 'reselect';

export const counterSelector = state => state.counter;

export const valueSelector = createSelector(
	counterSelector,
	counter => counter.value,
);