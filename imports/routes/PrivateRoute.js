import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
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
