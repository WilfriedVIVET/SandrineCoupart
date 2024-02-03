import axios from "axios";

export const GET_ALLERGENS = "GET_ALLERGENS";

export const getAllergens = (url) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(url + "/allergens");
      dispatch({ type: GET_ALLERGENS, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
