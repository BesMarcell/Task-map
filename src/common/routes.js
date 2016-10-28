import { Redirect, Router, Route, IndexRoute } from 'react-router';
import React from 'react';


import WelcomePage from './components/WelcomePage';
import App from './components/App';

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={WelcomePage} />
  </Route>
);

export default Routes;
