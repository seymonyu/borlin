import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  RESET_STORE,
} from "./productWishlist";

//add cart action
export const addToWishList = (id) => {
  return {
    type: ADD_TO_WISHLIST,
    id,
  };
};
//remove item action
export const removeFromWishList = (id) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    id,
  };
};
export const resetStore = (id) => {
  return {
    type: RESET_STORE,
    id,
  };
};
