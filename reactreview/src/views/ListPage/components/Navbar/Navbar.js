import React, { Component } from 'react';


import './Navbar.css';

class Navbar extends Component {
  onSearchChange = (e) => {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <img alt="" src="https://hn.algolia.com/assets/logo-hn-search.png"/>
            </li>
            <li>Logo Title</li>
            <li>
              <input
                className="search-box"
                placeholder="Search stories by title, url, or author"
                onChange={this.onSearchChange}
                type="text"
              />
            </li>
            <li>Settings</li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar;
