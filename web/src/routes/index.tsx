import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Schedule from '../pages/Schedule';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/schedule/:student_id" component={Schedule} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
