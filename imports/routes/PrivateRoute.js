import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, component: Component, redirectTo, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: redirectTo ? redirectTo : '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

export default createContainer(props => {
  const isAuthenticated = !!Meteor.userId();
  return {
    isAuthenticated,
    ...props
  };
}, PrivateRoute);
