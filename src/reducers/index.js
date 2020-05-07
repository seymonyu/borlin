import { combineReducers } from "redux";
import getProduct from "./product";
import addShipping from "./cart";
const allReducers = combineReducers({
  getProduct: getProduct,
  addShipping: addShipping,
});
export default allReducers;
