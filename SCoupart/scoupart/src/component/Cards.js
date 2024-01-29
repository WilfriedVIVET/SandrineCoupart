import React, { useEffect, useState } from "react";
import Notice from "./Notice";
import { isEmpty } from "../Utils/Utils";
import { useSelector } from "react-redux";

const Cards = ({ recipe }) => {
  const [showNotice, setShowNotice] = useState(false);
  const personalRecipes = useSelector((state) => state.personalRecipes);

  useEffect(() => {
    if (!isEmpty(personalRecipes)) {
      setShowNotice(true);
    }
  }, [showNotice, personalRecipes]);
  //Card recette de cuisine.
  return (
    <div className="card">
      <div className="card-title">
        <h2>{recipe.title}</h2>
      </div>
      <div className="trait"></div>
      <br />
      <div className="prepa">
        <span>
          <strong>Description :</strong> {recipe.description}
        </span>
        <br />
        <span>
          <strong>Temps de préparation :</strong> {recipe.preparation_time} min
        </span>
        <br />
        <span>
          <strong>Temps de cuisson :</strong> {recipe.cooking_time} min
        </span>
        <br />
        <span>
          <strong>Temps de repos :</strong> {recipe.break_time} min
        </span>
        <br />
        <span>
          <strong>Ingredients </strong>: {recipe.ingredient}
        </span>
        <br />
      </div>
      <br />
      <div className="trait"></div>
      <br />
      <div className="step">
        <span>
          <strong>Les étapes :</strong> {recipe.step}
        </span>
      </div>
      <br />
      <div className="trait"></div>
      <br />
      <div className="card-footer">
        <span>
          <strong>Allergene :</strong> {recipe.allergen}
        </span>
        <br />
        <span>
          <strong>Régime :</strong> {recipe.regime}
        </span>
        <br />
      </div>
      <br />
      <div className="trait"></div>
      {showNotice && <Notice recipe={recipe} />}
      <br />
    </div>
  );
};

export default Cards;
