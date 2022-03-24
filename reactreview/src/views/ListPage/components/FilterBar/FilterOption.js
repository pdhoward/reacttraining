import React from 'react'

/**
 * props
 * - label
 * - selectOptions
 */

function FilterOption(props) {
  return (
    <div className="filter-option">
      <label htmlFor="search-select">{props.label}</label>
      <select name="search-select" selected={props.selectOptions[0]}>
        {props.selectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
          ))
        }
      </select>
    </div>
  )
}

export default FilterOption
