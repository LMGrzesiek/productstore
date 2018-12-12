import { combineReducers } from "redux";
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";
import { firebaseReducer } from "react-redux-firebase";

const store = combineReducers({
  productsReducer,
  cartReducer,
  firebaseReducer
});

export default store;
