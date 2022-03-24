import React, { Component } from 'react'

import ListCard from './ListCard.js'

import './ListContainer.css';

export class ListContainer extends Component {
  render() {
    return (
      <div className="list-container">
        <ListCard
          title="Stephen Hawking has died :("
          links={["Something cool", "Another Link To Nowhere", "One more Just for fun"]}
        />

<ListCard
          title="Stephen Hawking has died :("
          links={["Something cool", "Another Link To Nowhere", "One more Just for fun"]}
        />

<ListCard
          title="Stephen Hawking has died :("
          links={["Something cool", "Another Link To Nowhere", "One more Just for fun"]}
        />

<ListCard
          title="Stephen Hawking has died :("
          links={["Something cool", "Another Link To Nowhere", "One more Just for fun"]}
        />

<ListCard
          title="Stephen Hawking has died :("
          links={["Something cool", "Another Link To Nowhere", "One more Just for fun"]}
        />

<ListCard
          title="Stephen Hawking has died :("
          links={["Something cool", "Another Link To Nowhere", "One more Just for fun"]}
        />
      </div>
    )
  }
}

export default ListContainer
