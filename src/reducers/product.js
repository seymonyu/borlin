
export default function getProduct(state={message:""}, action) {
    switch (action.type) {
      case "GET_PRODUCT":
        return { ...state,id:action.id,size:action.size,description:action.description,image:action.image,price:action.price,category:action.category };
      default:
        return state;
    }
  }

 