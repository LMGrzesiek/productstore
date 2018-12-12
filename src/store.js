import { combineReducers } from "redux";
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";

const store = combineReducers({
  productsReducer,
  cartReducer
});

export default store;
