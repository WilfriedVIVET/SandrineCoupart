import axios from "axios";

export const GET_USERID = "GET_USERID";
export const RESET_USERID = "RESET_USERID";

export const getUserId = (url, name, firstName) => {
  return async (dispatch) => {
    try {
      console.log("url passé = " + url + `user/${name}/${firstName}`);
      const res = await axios.get(url + `user/${name}/${firstName}`);
      dispatch({ type: GET_USERID, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};

export const resetUserId = () => ({
  type: RESET_USERID,
});
