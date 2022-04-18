import { cartActionTypes } from "redux/types";

function cartReducer(
  state: Iproduct[] = [],
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      return [...state, action.payload];

    case cartActionTypes.REMOVE_FROM_CART:
      const res = state.filter((item) => item._id !== action.payload);
      return res;

    case cartActionTypes.CLEAR_CART:
      return [];

    default:
      return state;
  }
}
export default cartReducer;
