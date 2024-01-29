import {
  GET_PERSONALRECIPES,
  RESET_PERSONALRECIPES,
} from "../actions/personalRecipes.action";

const initialState = {};

const personalRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSONALRECIPES:
      return action.payload;
    case RESET_PERSONALRECIPES:
      return initialState;
    default:
      return state;
  }
};

export default personalRecipesReducer;
