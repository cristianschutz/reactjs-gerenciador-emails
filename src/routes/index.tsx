import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from './Route';
import { Dashboard, Login } from '../pages';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/dashboard/:id" component={Dashboard} isPrivate />
        <Route path="*" component={Login} />
      </Switch>
    </Router>
  );
};

export default Routes;
