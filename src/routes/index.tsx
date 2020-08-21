import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from './Route';
import { Dashboard, Login } from '../pages';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} isPrivate />
        <Route path="/dashboard/:id" exact component={Dashboard} isPrivate />
        <Route path="*" component={Login} />
      </Switch>
    </Router>
  );
};

export default Routes;
