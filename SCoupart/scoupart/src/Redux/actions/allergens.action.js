import axios from "axios";

export const GET_ALLERGENS = "GET_ALLERGENS";

export const getAllergens = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost/API_COUPART/API/allergens");
    dispatch({ type: GET_ALLERGENS, payload: res.data });
  };
};
