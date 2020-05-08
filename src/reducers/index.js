import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import getProduct from "./product";
import resetReducer from "./resetReducer";

import { wishlistReducer } from "./action/wishlistReducer";
const allReducers = combineReducers({
  getProduct: getProduct,
  cartReducer: cartReducer,
  wishlistReducer: wishlistReducer,
  resetReducer: resetReducer,
});
export default allReducers;
