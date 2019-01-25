import React, { Component } from 'react';
import Navigation from './system/Navigation';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <Navigation currentPage="/team" />
    );
  }
}
