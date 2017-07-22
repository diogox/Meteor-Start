import React from 'react';
import PropTypes from 'prop-types';

const Component = (props) => (
  <p>{props.title} Component</p>
);

Component.popTypes = {
  title: PropTypes.string.isRequired
};

export default Component;
