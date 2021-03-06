import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import InstitutionsPage from './pages/InstitutionsPage';
import HomePage from './layouts/HomePage';

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/" exact component={HomePage} />
        <Route path="/homepage" exact component={HomePage} />
        <Route path="/institutions" exact component={InstitutionsPage} />
        <Route path="/institutions/:id" component={Dashboard} />
      </Switch>
    </Router>
  );
};
