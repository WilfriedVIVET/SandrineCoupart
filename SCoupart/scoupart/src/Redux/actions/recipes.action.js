import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";

export const getRecipes = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost/API_COUPART/API/recettes");
      dispatch({ type: GET_RECIPES, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
