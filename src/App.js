import React, { Component } from 'react';
import Routes from './routes';
import Plant from './svg/plant';
import Eyebrow from './svg/eyebrow';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div id="root">
        <h1 id="firstname" className="name">
          abby
        </h1>
        <h1 id="lastname" className="name">
          wigdale
        </h1>
        <Routes />
      </div>
    );
  }
}

export default App;
