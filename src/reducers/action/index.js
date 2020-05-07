const actionType = {
  GET_PRODUCT: "GET_PRODUCT",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_ITEM: "REMOVE_ITEM",
  SUB_QUANTITY: "SUB_QUANTITY",
  ADD_QUANTITY: "ADD_QUANTITY",
  ADD_SHIPPING: "ADD_SHIPPING",
};

export const getProduct = (filteredProduct) => ({
  type: actionType.GET_PRODUCT,
  id: filteredProduct.id,
  size: filteredProduct.size,
  description: filteredProduct.description,
  image: filteredProduct.image,
  price: filteredProduct.price,
  category: filteredProduct.category,
});
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

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SUB_QUANTITY = "SUB_QUANTITY";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const ADD_SHIPPING = "ADD_SHIPPING";
