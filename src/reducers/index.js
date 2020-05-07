import { combineReducers } from "redux";
import getProduct from "./product";
import addShipping from "./cartReducer";
import removeItem from "./cartReducer";

const allReducers = combineReducers({
  getProduct: getProduct,
  addShipping: addShipping,
  removeItem: removeItem,
});
export default allReducers;
