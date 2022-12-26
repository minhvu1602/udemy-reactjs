import { combineReducers } from "redux";
import productaction from "../reducers/product";
import cart from "./cart";
import order from "./order";

export default combineReducers({
  dataProduct: productaction,
  itemsInCart: cart,
  order,
});
