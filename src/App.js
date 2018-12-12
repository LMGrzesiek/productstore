import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import NavBar from "./NavBar";
import Cart from "./Cart";
import About from "./About";
import Register from "./Register";

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
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/about" component={About} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
