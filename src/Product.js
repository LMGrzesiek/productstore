import React, { Component } from "react";

import { connect } from "react-redux";
import { addToCart } from "./actions";

class Product extends Component {
  addToCartOnClick = () => {
    console.log("clicked " + this.props.e);
  };

  render() {
    return this.props.viewAsGrid ? (
      <div className="item col-4">
        <div className="thumbnail card py-3 my-1 px-3">
          <div className="img-event">
            <img
              className="group list-group-image img-fluid"
              src={this.props.e.Image}
              alt=""
            />
          </div>
          <div className="caption card-body">
            <h4 className="group card-title inner list-group-item-heading">
              {this.props.e.Name}
            </h4>
            <p className="group inner list-group-item-text">
              {this.props.e.Description}
            </p>
            <div className="row">
              <div className="col-12 col-md-6">
                <p className="lead">${this.props.e.Price}</p>
              </div>
              <div className="col-12 col-md-6">
                <button
                  className="btn btn-success"
                  onClick={() => this.props.addToCart(this.props.e)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="col-12 card py-3 my-1">
        <div className="row">
          <div className="col-4">
            <img className="img-fluid" src={this.props.e.Image} alt="" />
          </div>
          <div className="col-8">
            <h2>{this.props.e.Name}</h2>
            <p>{this.props.e.Description}</p>
            <div className="row">
              <div className="col-12 col-md-6">
                <p>${this.props.e.Price}</p>
              </div>
              <div className="col-12 col-md-6">
                <button
                  className="btn btn-success"
                  onClick={() => this.props.addToCart(this.props.e)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: product => {
      dispatch(addToCart(product));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
