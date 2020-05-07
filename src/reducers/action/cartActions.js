import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
} from "./action-types/cart-actions";
import { data } from "../../API/data";
import placeholder from "../../image/pexels-photo-3825153.jpeg";

const initState = {
  products: [],
  data: data.products,
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

//add cart action
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};
//remove item action
export const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    id,
  };
};
//subtract qt action
export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
//add qt action
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};
// add shipping action

export const addShipping = (id) => {
  return {
    type: ADD_SHIPPING,
    id,
  };
};
