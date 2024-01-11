import { GET_RECIPES } from "../actions/recipes.action";
import { GET_RECIPESFILTER } from "../actions/filterRecipes.action";

const initialState = {};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return action.payload;
    case GET_RECIPESFILTER:
      return action.payload;
    default:
      return state;
  }
};

export default recipesReducer;
