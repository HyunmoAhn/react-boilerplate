import Counter from 'components/Counter';
import Children from './routes/children';

export default () => ({
	path: 'counter',
	component: Counter,
	childRoutes: [
		Children(),
	],
});