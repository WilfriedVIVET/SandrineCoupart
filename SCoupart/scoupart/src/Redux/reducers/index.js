import { combineReducers } from "redux";
import recipesReducer from "./recipes.reducer";
import dietsReducer from "./diets.reducer";
import userIdReducer from "./userId.reducer";
import personalRecipes from "./personalRecipes.reducers";
import allergensReducer from "./allergens.reducer";
import modeReducer from "./mode.reducer";

export default combineReducers({
  recipesReducer,
  dietsReducer,
  userIdReducer,
  personalRecipes,
  allergensReducer,
  modeReducer,
});
