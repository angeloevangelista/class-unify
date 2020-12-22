import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Schedule from '../pages/Schedule';
import NewStudent from '../pages/NewStudent';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/schedule/:student_id" component={Schedule} />
      <Route path="/new-student" component={NewStudent} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
