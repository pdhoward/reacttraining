import React from 'react'

function ListCard(props) {
  return (
    <div className="list-card">
      <h4>{props.title}</h4>
      <div className="list-links">
        {props.links.map(l => <a href="/">{l}</a>)}
      </div>
    </div>
  )
}

export default ListCard;
