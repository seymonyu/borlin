import { combineReducers } from "redux";
import addShipping from "./cart";
import { wishlistReducer } from "./action/wishlistReducer";
const allReducers = combineReducers({
  addShipping: addShipping,
  wishlistReducer: wishlistReducer,
});
export default allReducers;
