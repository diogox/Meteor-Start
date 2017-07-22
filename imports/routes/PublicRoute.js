import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ isUnauthenticated, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isUnauthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/dashboard',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

export default createContainer(props => {
  const isUnauthenticated = !Meteor.userId();
  return {
    isUnauthenticated,
    ...props
  };
}, PublicRoute);
