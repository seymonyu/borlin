import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import getProduct from "./product";
<<<<<<< HEAD
import addShipping from "./cart";

const allReducers = combineReducers({
  getProduct: getProduct,
  addShipping: addShipping,

=======
import { wishlistReducer } from "./action/wishlistReducer";
const allReducers = combineReducers({
  getProduct: getProduct,
  cartReducer: cartReducer,
  wishlistReducer: wishlistReducer,
>>>>>>> def072be9df2a5944806f61aa70f3958e272958f
});
export default allReducers;
