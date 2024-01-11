import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Card from "../component/Cards";
import { useSelector } from "react-redux";
import { isEmpty } from "../component/Utils";
import store from "../Redux/store/store";
import { getRecipesFilter } from "../Redux/actions/filterRecipes.action";

const Recette = () => {
  const recip = useSelector((state) => state.recipesReducer);
  const diets = useSelector((state) => state.dietsReducer);

  const [nbDiet, setNbDiet] = useState("");

  useEffect(() => {
    store.dispatch(getRecipesFilter(nbDiet));
  }, [nbDiet]);

  const optionValue = (e) => {
    setNbDiet(e.target.value.charAt(0));
  };

  return (
    <div>
      <Header />
      <div className="filter-container">
        <label htmlFor="filtre">Filtrer par :</label>
        <select name="filtre" id="filtre" onChange={optionValue}>
          {!isEmpty(diets) &&
            diets.map((diet, index) => (
              <option key={index}>{diet.diet_id + " " + diet.diet_name}</option>
            ))}
        </select>
      </div>
      <div className="container">
        <div className="card-container">
          {!isEmpty(recip) &&
            recip.map((recips, index) => <Card recip={recips} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default Recette;
