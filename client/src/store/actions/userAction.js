import { LOGIN, LOGOUT, GET_USER } from "../actionTypes";
import api from "../../utils/appApi";
import history from "../../utils/history";
import user from "../reducers/userReducer";

export const userRegister = (userInfo) => (dispatch) => {
  api.auth
    .register(userInfo)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
};

//
// export const setUserToNotAuthorized = () => (dispatch) => {
//   localStorage.removeItem("isAuthorized");
//   dispatch({
//     type: LOGOUT,
//     payload: {},
//   });
//   history.push("/login");
// };
//
// export const setUserToAuthorized = () => (dispatch) => {
//   dispatch({
//     type: LOGIN,
//     payload: {},
//   });
//   localStorage.setItem("isAuthorized", "true");
// };
//
// export const login = (data) => async (dispatch) => {
//   const userDate = JSON.stringify(data);
//
//   return api.user
//     .login(userDate)
//     .then((res) => {
//       dispatch({
//         type: LOGIN,
//         payload: res.data,
//       });
//       localStorage.setItem("isAuthorized", "true");
//       return res;
//     })
//     .catch((err) => {
//       return err;
//     });
// };
//
// export const logout = () => async (dispatch) => {
//   return api.user
//     .logout()
//     .then((res) => {
//       setUserToNotAuthorized()(dispatch);
//       return res;
//     })
//     .catch((err) => Promise.reject(err));
// };
//
// export const getUser = () => (dispatch) => {
//   api.user
//     .getInfo()
//     .then((res) => {
//       dispatch({
//         type: GET_USER,
//         payload: res.data,
//       });
//       return res;
//     })
//     .catch((err) => {
//       return err;
//     });
// };
