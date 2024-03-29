import axios from "axios";

export const GET_RECIPESFILTER = "GET_RECIPESFILTER";

export const getRecipesFilter = (url, id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(url + `/${id}`);
      dispatch({ type: GET_RECIPESFILTER, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
