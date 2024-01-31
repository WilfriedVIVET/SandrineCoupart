import axios from "axios";

export const GET_ALLERGENS = "GET_ALLERGENS";

export const getAllergens = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost/API_COUPART/API/allergens");
      dispatch({ type: GET_ALLERGENS, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
