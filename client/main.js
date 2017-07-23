import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';

import AppRoutes from '../imports/routes/AppRoutes';

Meteor.startup(() => {
  ReactDom.render(AppRoutes, document.getElementById('app'));
});
