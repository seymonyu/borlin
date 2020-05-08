import { ADD_TO_CART} from "./action-types";


//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
