import { LOGOUT, SET_TO_AUTHORIZED } from "../actionTypes";
import api from "../../utils/appApi";
import jwt_decode from "jwt-decode";
import { errNotify } from "../../utils/utils";

export const userRegister = (userInfo) => async (dispatch) => {
  try {
    const res = await api.auth.register(userInfo);

    const { data } = res;
    localStorage.setItem("token", data.token);
    const tokenData = jwt_decode(data.token);

    return dispatch({
      type: SET_TO_AUTHORIZED,
      payload: {
        id: tokenData.id,
        role: tokenData.role,
      },
    });
  } catch (e) {
    errNotify(e);
  }
};
export const userLogin = (userInfo) => async (dispatch) => {
  try {
    const res = await api.auth.login(userInfo);

    const { data } = res;
    localStorage.setItem("token", data.token);
    const tokenData = jwt_decode(data.token);

    return dispatch({
      type: SET_TO_AUTHORIZED,
      payload: {
        id: tokenData.id,
        role: tokenData.role,
      },
    });
  } catch (e) {
    errNotify(e);
  }
};
export const checkToken = () => async (dispatch) => {
  try {
    const res = await api.auth.auth();

    const { data } = res;
    localStorage.setItem("token", data.token);
    const tokenData = jwt_decode(data.token);

    return dispatch({
      type: SET_TO_AUTHORIZED,
      payload: {
        id: tokenData.id,
        role: tokenData.role,
      },
    });
  } catch (e) {
    logout();
    if (e.data) errNotify(e);
  }
};
export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT,
  });
};
