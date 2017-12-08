import React, { Component } from 'react';
import './App.css';
import FilterableProductShowroom from './containers/FilterableProductShowroom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductShowroom />
      </div>
    );
  }
}

export default App;
