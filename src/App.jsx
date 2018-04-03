import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Routes from './routes';

function App() {
  return (
    <div className="App__container">
      <BrowserRouter>
          <Routes />
      </BrowserRouter>
    </div>
  );
}

export default hot(module)(App);
