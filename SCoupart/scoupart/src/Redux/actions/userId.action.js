import axios from "axios";

export const GET_USERID = "GET_USERID";

export const getUserId = (name, firstName) => {
  return async (dispatch) => {
    const res = await axios.get(
      "http://localhost/API_COUPART/API/user/" + name + "/" + firstName
    );
    dispatch({ type: GET_USERID, payload: res.data });
  };
};
