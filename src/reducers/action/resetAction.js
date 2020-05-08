import { RESET_STORE } from "./action-types/reset-action";

export const resetState = (id) => {
  return {
    type: RESET_STORE,
    id,
  };
};
