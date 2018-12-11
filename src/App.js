import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import NavBar from "./NavBar";
import Cart from "./Cart";
import About from "./About";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],
      showCart: false
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
        <NavBar quantity={this.state.cart.length} />
        <div className="row">
          <div className="col-12 my-3" />
        </div>
        <div className="container">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
