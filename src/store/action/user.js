import * as types from "../action-types";
import axios from 'axios'

export const getUsers = () => {
  return (dispatch) => {
    return axios.get("http://localhost:4001/api/users").then((res) => {
      dispatch({
        type: types.GETUSER,
        value:res.data,
      });
    });
  };
};
