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
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-12 my-3" />
            <p>There are {this.state.cart.length} items in your cart</p>
            <ul>
              {this.state.cart.map(e => (
                <li>{e}</li>
              ))}
            </ul>{" "}
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
