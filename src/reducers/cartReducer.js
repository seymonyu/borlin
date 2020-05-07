import { data } from "../API/data";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  SUB_SHIPPING,
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
  cartList: [
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
    {
      id: 1,
      size: "XS",
      description: "",
      image: placeholder,
      price: 850,
      category: "party",
      name: "Embellished Gown",
      quantity: "",
    },
    {
      id: 3,
      size: "M",
      description: "",
      image: placeholder,
      price: "380",
      category: "party",
      name: "Embriodered Top",
      quantity: "",
    },

    {
      id: 5,
      size: "XS",
      description: "",
      image: placeholder,
      price: 550,
      category: "lounge",
      name: "Sweater",
      quantity: "",
    },
  ],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id);
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
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.cartList.find((item) => action.id === item.id);
    let new_items = state.cartList.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      cartList: new_items,
      total: newTotal,
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

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6,
    };
  }

  if (action.type === SUB_SHIPPING) {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  }
};

export default cartReducer;
