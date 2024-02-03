import axios from "axios";

export const GET_DIETS = "GET_DIETS";

export const getDiets = (url) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(url + "/diets");
      dispatch({ type: GET_DIETS, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
