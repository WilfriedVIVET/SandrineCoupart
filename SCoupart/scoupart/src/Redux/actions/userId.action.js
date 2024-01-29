import axios from "axios";

export const GET_USERID = "GET_USERID";
export const RESET_USERID = "RESET_USERID";

export const getUserId = (name, firstName) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost/API_COUPART/API/user/${name}/${firstName}`
      );

      dispatch({ type: GET_USERID, payload: res.data });
    } catch (error) {}
  };
};

export const resetUserId = () => ({
  type: RESET_USERID,
});
