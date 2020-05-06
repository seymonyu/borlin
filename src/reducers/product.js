
export default function getProduct(state={message:""}, action) {
    switch (action.type) {
      case "PRODUCT_NAME":
        return { ...state,  };
      default:
        return state;
    }
  }