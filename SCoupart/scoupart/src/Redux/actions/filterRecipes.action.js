import axios from "axios";

export const GET_RECIPESFILTER = "GET_RECIPESFILTER";

export const getRecipesFilter = (id) => {
  return async (dispatch) => {
    const res = await axios.get(
      `http://localhost/API_COUPART/API/recette/regime/${id}`
    );
    dispatch({ type: GET_RECIPESFILTER, payload: res.data });
  };
};
