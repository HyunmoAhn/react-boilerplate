import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import ApiCallSampleContainer from './ApiCallSample/containers/ApiCallSampleContainer';
import CounterContainer from './Counter/containers/CounterContainer';

function routes() {
  return (
    <Switch>
      <Route path="/counter" component={CounterContainer} />
      <Route path="/api-call" component={ApiCallSampleContainer} />
      <Redirect to="/counter" from="/" />
    </Switch>
  )
}

export default routes;
