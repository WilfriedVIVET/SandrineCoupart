import { GET_PERSONALRECIPES } from "../actions/personalRecipes.action";

const initialState = {};

const personalRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSONALRECIPES:
      return action.payload;
    default:
      return state;
  }
};

export default personalRecipesReducer;
