export enum cartActionTypes {
  ADD_TO_CART = "add_to_cart",
  REMOVE_FROM_CART = "remove_from_cart",
  CLEAR_CART = "clear_cart",
}

interface addToCart {
  type: cartActionTypes.ADD_TO_CART;
  payload: Iproduct;
}
interface removeFromCart {
  type: cartActionTypes.REMOVE_FROM_CART;
  payload: string;
}
interface clearCart {
  type: cartActionTypes.CLEAR_CART;
}
export type cartActionType = addToCart | removeFromCart | clearCart;

// Auth Login
export enum authActionTypes {
  LOGIN_SUCCESS = "login/success",
  LOGIN_PENDING = "login/pending",
  LOGIN_FAIL = "login/fail",
  LOGOUT = "logout",
}

interface loginSuccess {
  type: authActionTypes.LOGIN_SUCCESS;
  payload: userData;
}
interface loginPending {
  type: authActionTypes.LOGIN_PENDING;
}
interface loginFailed {
  type: authActionTypes.LOGIN_FAIL;
  payload: string;
}
export type authActionType = loginSuccess | loginPending | loginFailed;
