import { data } from "../../API/data";

import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./productWishlist";

const initState = {
  data: data.products,
  wishList: [],
};

export const wishlistReducer = (state = initState, action) => {
  if (action.type === ADD_TO_WISHLIST) {
    let addedItem = state.data.find((item) => item.id === action.id);
    return {
      ...state,
      wishList: [...state.wishList, addedItem],
    };
  }

  if (action.type === REMOVE_FROM_WISHLIST) {
    let itemToRemove = state.wishList.find((item) => action.id === item.id);
    let new_items = state.wishList.filter((item) => action.id !== item.id);
    console.log(itemToRemove);
    return {
      ...state,
      wishList: new_items,
    };
  } else {
    return state;
  }
};
