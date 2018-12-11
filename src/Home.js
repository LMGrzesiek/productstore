import React, { Component } from "react";

import Product from "./Product";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      viewAsGrid: true,
      products: []
    };
  }

  toggleViewOnClick = () => {
    console.log(this.state);
    this.setState(state => {
      return { viewAsGrid: !this.state.viewAsGrid };
    });
  };

  componentDidMount() {
    fetch("./products.json").then(response => {
      response.json().then(data => {
        //Setting state on a component should kick-off the update lifecycle
        this.setState(state => {
          return { products: data };
        });
      });
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="btn-group">
            {this.state.viewAsGrid ? (
              <button
                className="btn btn-primary"
                onClick={this.toggleViewOnClick}
              >
                {" "}
                List View
              </button>
            ) : (
              <button className="btn btn-primary" disabled>
                {" "}
                List View
              </button>
            )}
            {this.state.viewAsGrid ? (
              <button className="btn btn-secondary" disabled>
                {" "}
                Grid View
              </button>
            ) : (
              <button
                className="btn btn-secondary"
                onClick={this.toggleViewOnClick}
              >
                {" "}
                Grid View
              </button>
            )}
          </div>
        </div>
        <div id="products" className="row view-group">
          {this.state.products.map(e => (
            <Product
              e={e}
              addToCart={this.addToCart}
              key={e.ID}
              viewAsGrid={this.state.viewAsGrid}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
