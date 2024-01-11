import { combineReducers } from "redux";
import recipesReducer from "./recipes.reducer";
import dietsReducer from "./diets.reducer";

export default combineReducers({
  recipesReducer,
  dietsReducer,
});
