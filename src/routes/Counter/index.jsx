import CounterContainer from './containers/CounterContainer';
import Children from './routes/children';

export default () => ({
	path: 'counter',
	component: CounterContainer,
	childRoutes: [
		Children(),
	],
});