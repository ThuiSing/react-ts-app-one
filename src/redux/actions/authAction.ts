import { Dispatch } from "redux";
import { authActionType, authActionTypes } from "redux/types";
import authService from "services/auth.service";

// interface logInActionType {
//     type :
// }

const authAction = (payload: LoginData) => {
  return (dispatch: Dispatch<authActionType>) => {
    dispatch({
      type: authActionTypes.LOGIN_PENDING,
    });
    authService
      .LoginUser(payload)
      .then((user) =>
        dispatch({
          type: authActionTypes.LOGIN_SUCCESS,
          payload: user,
        })
      )
      .catch((err) => {
        dispatch({
          type: authActionTypes.LOGIN_FAIL,
          payload: err?.response?.data?.message,
        });
      });
  };
};
export default authAction;
