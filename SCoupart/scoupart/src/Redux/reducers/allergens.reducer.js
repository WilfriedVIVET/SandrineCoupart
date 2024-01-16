import { GET_ALLERGENS } from "../actions/allergens.action";

const initialState = {};

export default function allergenReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALLERGENS:
      return action.payload;
    default:
      return state;
  }
}
