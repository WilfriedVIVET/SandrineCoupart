import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";

export const getRecipes = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost/API_COUPART/API/recettes");
    dispatch({ type: GET_RECIPES, payload: res.data });
  };
};
