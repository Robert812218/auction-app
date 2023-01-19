import React, { Component } from 'react';



export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>DAS IST AUCTION APP</h1>

        <div class="display-area flex flex-row border-black-2">
        <div>
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
