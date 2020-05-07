import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./productWishlist";

//add cart action
export const addToWishlist = (id) => {
  return {
    type: ADD_TO_WISHLIST,
    id,
  };
};
//remove item action
export const removeFromWishlist = (id) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    id,
  };
};
