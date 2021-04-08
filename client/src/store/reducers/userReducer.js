import { LOGIN, LOGOUT, GET_USER, SET_TO_AUTHORIZED } from "../actionTypes";

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
    case SET_TO_AUTHORIZED:
      return {
        ...state,
        isAuthorized: true,
        data: {
          id: action.payload.id,
          role: action.payload.role,
        },
      };
    default:
      return state;
  }
};

export default user;
