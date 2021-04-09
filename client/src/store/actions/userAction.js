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
export const checkToken = () => (dispatch) => {
  return api.auth
    .auth()
    .then((res) => {
      const { data } = res;
      localStorage.setItem("token", data.token);
      const tokenData = jwt_decode(data.token);

      dispatch({
        type: SET_TO_AUTHORIZED,
        payload: {
          id: tokenData.id,
          role: tokenData.role,
        },
      });
      return true;
    })
    .catch((e) => {
      logout();
      throw e;
    });
  // try {
  //   const res = await api.auth.auth();
  //
  //   const { data } = res;
  //   localStorage.setItem("token", data.token);
  //   const tokenData = jwt_decode(data.token);
  //
  //   return dispatch({
  //     type: SET_TO_AUTHORIZED,
  //     payload: {
  //       id: tokenData.id,
  //       role: tokenData.role,
  //     },
  //   });
  // } catch (e) {
  //   logout();
  //   if (e.data) errNotify(e);
  // }
};

// export const deleteDeal = (id) => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     return axios
//       .delete(`/staff/deals/${id}`)
//       .then((res) => {
//         dispatch({
//           type: ADMIN_DELETE_DEAL,
//           payload: { id },
//         });
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT,
  });
};
