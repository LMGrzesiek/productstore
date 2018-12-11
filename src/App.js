import React, { Component } from "react";

import Product from "./Product";
import NavBar from "./NavBar";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cart: []
    };
  }

  addToCart = product => {
    this.setState(state => {
      return { cart: this.state.cart.concat([product]) };
    });
  };

  render() {
    return (
      <div>
        {[this.state.cart.length].map(count => (
          <NavBar count={count} />
        ))}
        <div className="container">
          <div className="row">
            <div className="col-12 my-3" />
            <p>There are {this.state.cart.length} items in your cart</p>
          </div>
          <div id="products" className="row view-group">
            {[
              "Fried Chocolate Balls",
              "Fried Twix",
              "Deep Fried Pickles",
              "Country Fried Steak",
              "Fried Butter",
              "Fried Oreos"
            ].map(e => (
              <Product e={e} addToCart={this.addToCart} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
