import { ADD_PRODUCTS } from "../actions";

function productsReducer(products = [], action) {
  switch (action.type) {
    case ADD_PRODUCTS: {
      products = products.concat(action.products);
      break;
    }
  }
  return products;
}

export default productsReducer;
