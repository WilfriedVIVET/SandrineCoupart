import { GET_DIETS } from "../actions/diets.action";

const initialState = {};

export default function dietsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DIETS:
      return action.payload;
    default:
      return state;
  }
}
