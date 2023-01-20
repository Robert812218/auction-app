import React, { Component } from 'react';

const itemData = {
  itemName: "name",
  itemType: "type",
  itemPrice: "price",
  itemAveragePrice: "average",
  itemCurrentBid: "current bid",
  itemBuyoutPrice: "buyout price",
  itemQuantity: "quantity",
  itemSaleDuration: "date",
  itemSellerProfile: "profile",
};

export class Item extends Component {
  static displayName = Item.name;


  render() {
    return (
      <div>
        <h1>Item</h1>

        <div class="item-card border-black-2">
          {/* item name */}
          <p>Name : {itemData.itemName}</p>
          {/* item type */}
          <p>Type: {itemData.itemType}</p>
          {/* this item price */}
          <p>Price: {itemData.itemPrice}</p>
          {/* average price for this item */}
          <p>Average Price: {itemData.itemAveragePrice}</p>
          {/* current bid */}
          <p>Average Bid: {itemData.currentBid}</p>
          {/* buyout price */}
          <p>Buyout Price: {itemData.itemBuyoutPrice}</p>
          {/* duration of auction sale */}
          <p>Sale duration: {itemData.itemSaleDuration}</p>
          {/* quantity of this item on the market */}
          <p>Quantity on market: {itemData.itemQuantity}</p>
          {/* seller (link to profile) */}
          <p>Seller Profile: {itemData.itemSellerProfile}</p>
        </div>
      </div>
    );
  }
}
