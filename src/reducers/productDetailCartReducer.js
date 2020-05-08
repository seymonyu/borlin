import data from "../API/data";
import { ADD_TO_CART } from "./action/action-types";

const initState = {
  data: data.products,
  cartList: [],
  total: 0,
};

const productDetailCartReducer = (initState, action) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.data.find((item) => item.id === action.id);

    return {
      ...state,
      addedItems: [...state.addedItems, addedItem],
      total: newTotal,
    };
  } else {
    return state;
  }
};

export default productDetailCartReducer;
