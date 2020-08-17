import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard, Login } from "../pages";

const Routes: React.FC = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/dashboard/:id">
          <Dashboard />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
};

export default Routes;
