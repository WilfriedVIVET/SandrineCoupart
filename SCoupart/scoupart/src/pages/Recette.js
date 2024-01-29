import Header from "../component/Header";
import Card from "../component/Cards";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../Utils/Utils";
import store from "../Redux/store/store";
import { getRecipes } from "../Redux/actions/recipes.action";
import { useEffect } from "react";
store.dispatch(getRecipes());

//Page des recettes.
const Recette = () => {
  const dispatch = useDispatch();
  const recipeBase = useSelector((state) => state.recipesReducer);
  const userId = useSelector((state) => state.userIdReducer);
  const personalRecipes = useSelector((state) => state.personalRecipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="card-container">
        {!isEmpty(recipeBase) &&
          isEmpty(userId) &&
          recipeBase.map((recipes, index) => (
            <Card recipe={recipes} key={index} />
          ))}

        {!isEmpty(personalRecipes) &&
          !isEmpty(userId) &&
          personalRecipes.map((pRecipes, index) => (
            <Card recipe={pRecipes} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Recette;
