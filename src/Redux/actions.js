import axios from "axios";
import * as types from "./actionTypes";

export const loginUser = (payload) => (dispatch) => {
  axios
    .post(`https://reqres.in/api/login`, payload)
    .then((res) =>
      dispatch({ type: types.LOGIN_USER, payload: res.data.token })
    );
};
