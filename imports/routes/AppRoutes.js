import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Component from '../ui/Component';
import Login from '../ui/Login';
import Signup from '../ui/Signup';

const Routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Component title="Homepage" />} />
      <PublicRoute path="/login" component={Login} />
      <PublicRoute path="/signup" component={Signup} />
      <PrivateRoute path="/dashboard" component={Component} />
      <Route render={() => <Component title="Not Found" />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
