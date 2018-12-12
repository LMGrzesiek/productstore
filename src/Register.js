import React, { Component } from "react";
import { connect } from "react-redux";

class Register extends Component {
  render() {
    return (
      <div>
        <div>
          <form>
            <div className="form-group">
              <label for="username">User Name</label>
              <input
                type="text"
                name="username"
                className="form-control"
                required
                onchange
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="text"
                name="password"
                className="form-control"
                required
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    firebase: state.firebaseReducer
  };
};

export default connect(mapStateToProps)(Register);
