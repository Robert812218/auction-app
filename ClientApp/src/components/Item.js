import React, { Component } from 'react';

export class Item extends Component {
  static displayName = Item.name;


  render() {
    return (
      <div>
        <h1>Item</h1>

        <div class="item-card border-black-2">
          {/* item name */}
          <p>Name</p>
          {/* item type */}
          <p>Type</p>
          {/* this item price */}
          <p>Price</p>
          {/* average price for this item */}
          <p>Average Price</p>
          {/* current bid */}
          <p>Current Price</p>
          {/* buyout price */}
          <p>Buyout Price</p>
          {/* duration of auction sale */}
          <p>Sale Duration</p>
          {/* quantity of this item on the market */}
          <p># of items on market</p>
          {/* seller (link to profile) */}
          <p>Seller Profile</p>
        </div>
      </div>
    );
  }
}
