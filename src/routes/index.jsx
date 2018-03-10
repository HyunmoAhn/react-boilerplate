import RootLayout from '../components/RootLayout';
import ApiCallSample from './ApiCallSample';
import Counter from './Counter';
import Iframe from './Iframe';

const routes = (store) => ({
	path: '/',
	component: RootLayout,
	childRoutes: [
		ApiCallSample(store),
		Counter(store),
    Iframe(store),
	],
});

export default routes;
