import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';

import Routes from '../imports/routes/routes';

Meteor.startup(() => {
  ReactDom.render(Routes, document.getElementById('app'));
});
