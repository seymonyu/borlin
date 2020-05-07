import {
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  SUB_SHIPPING,
} from "./action-types/cart-actions";
import { data } from "../../API/data";
import placeholder from "../../image/pexels-photo-3825153.jpeg";

//remove item action
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
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

//SUB SHIP
export const subShipping = (id) => {
  return {
    type: SUB_SHIPPING,
    id,
  };
};
