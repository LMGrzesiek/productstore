import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom";

//The createStore and Provider functions will allow me to register my custom store
//so that my components can interact with it
import { createStore, combineReducers, compose } from "redux";
import { Provider } from "react-redux";

import { reactReduxFirebase } from "react-redux-firebase";
import firebase from "firebase";

import store from "./store";

//I get these from my Firebase Console
var firebaseConfig = {
  apiKey: "AIzaSyDe805M2W0WFzXKplkuCih8bCFx-oWdnMw",
  authDomain: "react-redux-product-store.firebaseapp.com",
  databaseURL: "https://react-redux-product-store.firebaseio.com",
  projectId: "react-redux-product-store",
  storageBucket: "react-redux-product-store.appspot.com",
  messagingSenderId: "612326512719"
};
firebase.initializeApp(firebaseConfig);

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, { userProfile: "users" })
)(createStore);

const createdStore = createStoreWithFirebase(store);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={createdStore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
