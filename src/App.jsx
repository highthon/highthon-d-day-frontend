/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './system/Navigation';
import Button from './components/Button';
import TeamApply from './pages/TeamApply';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Route path="/team" component={TeamApply} />
      </div>
    );
  }
}
