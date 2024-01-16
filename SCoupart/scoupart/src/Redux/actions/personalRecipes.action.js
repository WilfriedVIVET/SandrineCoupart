import axios from "axios";

export const GET_PERSONALRECIPES = "GET_PERSONALRECIPES";

export const getPersonalRecipes = (name, firstName) => {
  return async (dispatch) => {
    const res = await axios.get(
      "http://localhost/API_COUPART/API/personalRecipes/" +
        name +
        "/" +
        firstName
    );
    dispatch({ type: GET_PERSONALRECIPES, payload: res.data });
  };
};
