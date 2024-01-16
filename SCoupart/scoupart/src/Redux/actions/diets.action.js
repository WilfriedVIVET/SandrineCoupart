import axios from "axios";

export const GET_DIETS = "GET_DIETS";

export const getDiets = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost/API_COUPART/API/diets");
    dispatch({ type: GET_DIETS, payload: res.data });
  };
};
