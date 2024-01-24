import axios from "axios";

export const GET_USERID = "GET_USERID";
export const RESET_USERID = "RESET_USERID";

export const getUserId = (name, firstName) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost/API_COUPART/API/user/${name}/${firstName}`
      );
      const userData = res.data;

      dispatch({ type: GET_USERID, payload: userData });
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur:", error);
    }
  };
};

export const resetUserId = () => ({
  type: RESET_USERID,
});
