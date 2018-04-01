import CounterContainer from './containers/CounterContainer';
import Children from './routes/children';

export default (store) => ({
  path: 'counter',
  component: CounterContainer,
  childRoutes: [
    Children(store),
  ],
});
