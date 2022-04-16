import {
  add_to_cart,
  clear_cart,
  remove_from_cart,
} from "redux/actions/cartAction";
import { cartActionTypes } from "redux/types";

function cartReducer(
  state: Iproduct[] = [],
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      return [...state, action.payload];

    case cartActionTypes.REMOVE_FROM_CART:
      const res = state.filter((data) => data._id !== action.payload);
      return res;

    case cartActionTypes.CLEAR_CART:
      return [];

      type x = ReturnType<typeof add_to_cart>;
      type y = ReturnType<typeof remove_from_cart>;
      type z = ReturnType<typeof clear_cart>;

    default:
      return state;
  }
}
export default cartReducer;
