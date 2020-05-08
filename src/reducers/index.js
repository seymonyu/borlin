import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import getProduct from "./product";

import { wishlistReducer } from "./action/wishlistReducer";
const allReducers = combineReducers({
  getProduct: getProduct,
  cartReducer: cartReducer,
  wishlistReducer: wishlistReducer,
});
export default allReducers;
