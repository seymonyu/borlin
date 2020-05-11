import { data } from "../API/data";
import { RESET_STORE } from "./action/action-types/reset-action";

const initState = {
  data: data.products,
  wishList: [],
  cartList: [],
  total: 0,
};

const resetReducer = (state = initState, action) => {
  switch (action.type) {
    case RESET_STORE:
      {
        state = initState;
      }
      break;
  }

  return state;
};
export default resetReducer;
