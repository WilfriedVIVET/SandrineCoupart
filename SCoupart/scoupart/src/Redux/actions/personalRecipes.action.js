import axios from "axios";

export const GET_PERSONALRECIPES = "GET_PERSONALRECIPES";
export const RESET_PERSONALRECIPES = "RESET_PERSONALRECIPES";

export const getPersonalRecipes = (name, firstName) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        "http://localhost/API_COUPART/API/personalRecipes/" +
          name +
          "/" +
          firstName
      );
      dispatch({ type: GET_PERSONALRECIPES, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};

export const resetPersonalRecipes = () => ({
  type: RESET_PERSONALRECIPES,
});
