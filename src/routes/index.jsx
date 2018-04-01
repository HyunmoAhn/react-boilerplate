import RootLayout from '../components/RootLayout';
import ApiCallSample from './ApiCallSample';
import Counter from './Counter';

const routes = (store) => ({
  path: '/',
  component: RootLayout,
  childRoutes: [
    ApiCallSample(store),
    Counter(store),
  ],
});

export default routes;
