import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import FilterBar from './components/FilterBar/FilterBar';
import ListContainer from './components/ListContainer/ListContainer'

import './ListPage.css';

class ListPage extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <FilterBar/>
        <ListContainer/>
        {/* List Container */}
        {/* List Item */}
        {/* List Item Title */}
        {/* List Item Links */}
        {/* List Item Link */}
      </div>
    );
  }
}

export default ListPage;
