export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SUB_QUANTITY = "SUB_QUANTITY";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const ADD_SHIPPING = "ADD_SHIPPING";

export default function getProduct(state = { message: "" }, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        id: action.id,
        size: action.size,
        description: action.description,
        image: action.image,
        price: action.price,
        category: action.category,
      };

    default:
      return state;
  }
}
