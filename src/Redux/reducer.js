// Application reducer
import * as types from "./actionTypes";

const initState = {
  token: "",
  isLoggedIn: false,
  data: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {

    case types.LOGIN_USER: {
      return {
        ...state,
        isLoggedIn: true,
        token: payload,
      };
    }

    default:
      return state;
  }
};
