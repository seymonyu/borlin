export default function getProduct(state = {}, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        id: action.id,
        name:action.name,
        size: action.size,
        description: action.description,
        image: action.image,
        price: action.price,
        category: action.category,
        name: action.name,
        color: action.color,
      };

    default:
      return state;
  }
}
