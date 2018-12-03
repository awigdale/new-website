import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './Home';
import Projects from './Projects';
import Art from './Art';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/art" component={Art} />
    </Switch>
  );
};

export default Routes;
