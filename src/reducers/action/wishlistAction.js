import { ADD_TO_CART, REMOVE_ITEM } from "../action/productwishlist";

//add cart action
export const addToCart = (id) => {
  return {
    type: ADD_TO_WISHLIST,
    id,
  };
};
//remove item action
export const removeItem = (id) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    id,
  };
};
