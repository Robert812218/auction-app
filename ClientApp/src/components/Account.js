import React, { Component } from "react";

export class Account extends Component {
    static displayName = Account.name;

    constructor(props) {
        super(props);
        this.state = {  };
    }


    render() {
        return (
            <div>
                <h1>ACCOUNT</h1>
            </div>
        )
    }
}