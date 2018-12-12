import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";

function cartReducer(cart = [], action) {
  switch (action.type) {
    case ADD_TO_CART: {
      cart.push(action.product);
      break;
    }
    case REMOVE_FROM_CART: {
      let productIndex = cart.map(e => e.ID).indexOf(action.product.id);
      cart.splice(productIndex, 1);
    }
  }
  return cart;
}

export default cartReducer;
