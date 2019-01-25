import React, { Component } from 'react';
import Navigation from './system/Navigation';
import Button from './components/Button';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation currentPage="/team" />
        <Button onClick={() => console.log('button click')} text="button" />
      </div>
    );
  }
}
