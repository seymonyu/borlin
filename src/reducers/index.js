import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import { addShipping } from "./action/cartActions";
import { wishlistReducer } from "./action/wishlistReducer";
const allReducers = combineReducers({
  addShipping: addShipping,
  cartReducer: cartReducer,
  wishlistReducer: wishlistReducer,
});
export default allReducers;
