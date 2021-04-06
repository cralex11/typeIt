import { LOGIN, LOGOUT, GET_USER } from "../actionTypes";

const initialState = {
  isAuthorized: false,
  data: {
    id: null,
    role: null,
  },
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthorized: true,
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    case LOGOUT:
      return initialState;
    case GET_USER:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default user;
