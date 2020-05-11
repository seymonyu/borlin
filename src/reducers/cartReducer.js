import { data } from "../API/data";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  SUB_SHIPPING,
  RESET_STORE,
} from "./action/action-types/cart-actions";

import placeholder from "../image/pexels-photo-3825153.jpeg";
const initState = {
  data: data.products,
  wishList: [
    {
      id: 4,
      size: "L",
      description: "",
      image: placeholder,
      price: 950,
      category: "party",
      name: "Sequin Dress",
      quantity: "",
    },
    {
      id: 2,
      size: "S",
      description: "",
      image: placeholder,
      price: 540,
      category: "party",
      name: "Metallic Skirt",
      quantity: "",
    },
  ],
  cartList: [],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.data.find((item) => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.cartList.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        cartList: [...state.cartList, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.cartList.find((item) => action.id === item.id);
    let new_items = state.cartList.filter((item) => action.id !== item.id);

    //calculating the total
    let subTotal = state.total - itemToRemove.price * itemToRemove.quantity;

    return {
      ...state,
      cartList: new_items,
      total: subTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.cartList.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.data.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.cartList.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        cartList: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }
  if (action.type === RESET_STORE) {
    switch (action.type) {
      case RESET_STORE:
        {
          state = initState;
        }
        break;
    }

    return state;
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 9,
    };
  }

  if (action.type === SUB_SHIPPING) {
    return {
      ...state,
      total: state.total - 9,
    };
  } else {
    return state;
  }
};

export default cartReducer;
