import React, { Component } from 'react';
import ListPage from './views/ListPage/ListPage'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <ListPage/>
      </div>
    );
  }
}

export default App;
