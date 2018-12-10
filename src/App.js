import React, { Component } from "react";

import Product from "./Product";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-12 my-3" />
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
              <Product e={e} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
