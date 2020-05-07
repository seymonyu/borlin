/* actions for cart */
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};

export const deleteFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};
