import RootLayout from '../components/RootLayout';
import Counter from './Counter';

const routes = () => ({
	path: '/',
	component: RootLayout,
	childRoutes: [
		Counter(),
	],
});

export default routes;