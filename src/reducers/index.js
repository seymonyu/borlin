import { combineReducers } from "redux";
import getProduct from "./product";
import cartReducer from "./cartReducer";
import { addShipping } from "./action/cartActions";

const allReducers = combineReducers({
  getProduct: getProduct,
  addShipping: addShipping,
  cartReducer: cartReducer,
});
export default allReducers;
