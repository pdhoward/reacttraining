import React, { Component } from 'react'

import FilterOption from './FilterOption'

import './FilterBar.css'

class FilterBar extends Component {
  render() {
    const searchSelectOptions = ["Stories", "All", "Comments"]
    const bySelectOptions = ["Popularity", "Date"]
    const forSelectOptions = ["All time", "Last 24h", "Past Week", "Past Month", "Past Year", "Custom range"]

    return (
      <div className="filter-bar">
        <div className="filter-bar-items">

          <FilterOption
            label="Search"
            selectOptions={searchSelectOptions}
          />

          <FilterOption
            label="by"
            selectOptions={bySelectOptions}
          />

          <FilterOption
            label="for"
            selectOptions={forSelectOptions}
          />
          
          
        </div>
      </div>
    )
  }
}

export default FilterBar;
