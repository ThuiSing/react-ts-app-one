import { authActionType, authActionTypes } from "redux/types";

interface IAuthState {
  data: userData | null;
  state: "pending" | "success" | "idle" | "error";
  error: string | null;
}
const initialState: IAuthState = {
  data: null,
  state: "idle",
  error: null,
};

function authReducer(
  state: IAuthState = initialState,
  action: { type: string; payload: authActionType }
) {
  switch (action.type) {
    case authActionTypes.LOGIN_SUCCESS:
      return {
        data: action.payload,
        state: "success",
        error: null,
      };
    case authActionTypes.LOGIN_PENDING:
      return {
        data: null,
        state: "pending",
        error: null,
      };
    case authActionTypes.LOGIN_FAIL:
      return {
        data: null,
        state: "error",
        error: action.payload,
      };
    case authActionTypes.LOGOUT:
      return initialState;

    default:
      return state;
  }
}
export default authReducer;
