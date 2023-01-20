import React, { Component } from 'react';


export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="border-2 border-black">
        <h1>DAS IST AUCTION APP</h1>
        <div>
          <div className="">
            <h3>Your Items</h3>
          </div>
          <div>
            <h3>Search Items</h3>
          </div>
        </div>
      </div>
    );
  }
}
