import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './Home';
import Projects from './Projects';
import Art from './Art';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
