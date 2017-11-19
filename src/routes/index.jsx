import RootLayout from '../components/RootLayout';
import Counter from './Counter';
import GithubCall from './GithubCall';

const routes = (store) => ({
	path: '/',
	component: RootLayout,
	childRoutes: [
		Counter(store),
		GithubCall(store),
	],
});

export default routes;