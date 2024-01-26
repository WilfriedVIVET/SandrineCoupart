import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { useSelector } from "react-redux";
import { isEmpty } from "../Utils/Utils";
import { getDiets } from "../Redux/actions/diets.action";
import { getAllergens } from "../Redux/actions/allergens.action";
import {
  postNewUser,
  postNewDiet,
  postNewAllergen,
  postNewRecipe,
} from "../Utils/PostUtils.js";

import store from "../Redux/store/store";

const Admin = () => {
  useEffect(() => {
    store.dispatch(getDiets());
    store.dispatch(getAllergens());
  }, []);

  const allergens = useSelector((state) => state.allergensReducer);
  const diets = useSelector((state) => state.dietsReducer);

  //nouvel utilisateur
  const [newUser, setNewUser] = useState({
    name: "",
    firstName: "",
    selectedDiets: [],
    selectedAllergens: [],
  });
  //Nouvelle recette
  const [newDiet, setNewDiet] = useState({
    nameDiets: "",
  });
  //Nouvel allergène
  const [newAllergen, setNewAllergen] = useState({
    nameAllergen: "",
  });
  //Nouvelle recette
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    description: "",
    preparationTime: "",
    breakTime: "",
    cookingTime: "",
    ingredient: "",
    step: "",
    selectedDiets: [],
    selectedAllergens: [],
    isVisible: 0,
  });

  //Fonction qui efface le formulaire.
  const resetForm = (e) => {
    const form = e.target;
    form.reset();
    setNewUser({
      name: "",
      firstName: "",
      selectedDiets: [],
      selectedAllergens: [],
    });
    setNewRecipe({
      title: "",
      description: "",
      preparationTime: "",
      breakTime: "",
      cookingTime: "",
      ingredient: "",
      step: "",
      selectedDiets: [],
      selectedAllergens: [],
      isVisible: 0,
    });
  };

  const handleUserChange = (e) => {
    const { name, value, type, checked } = e.target;

    setNewUser((prevData) => {
      if (type === "checkbox") {
        return {
          ...prevData,
          [name]: checked
            ? [...prevData[name], value]
            : prevData[name].filter((item) => item !== value),
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  const handleRecipeChange = (e) => {
    const { name, value, type, checked } = e.target;

    setNewRecipe((prevData) => {
      if (type === "checkbox") {
        if (name === "isVisible") {
          return {
            ...prevData,
            [name]: checked ? 1 : 0,
          };
        } else {
          return {
            ...prevData,
            [name]: checked
              ? [...prevData[name], value]
              : prevData[name].filter((item) => item !== value),
          };
        }
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  //Post du nouvel utilisateur
  const handleUser = async (e) => {
    e.preventDefault();
    try {
      await postNewUser(newUser);
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'utilisateur:", error);
    } finally {
      resetForm(e);
    }
  };
  //Post du nouveau régime
  const handleDiet = async (e) => {
    e.preventDefault();
    try {
      await postNewDiet(newDiet);
    } catch (error) {
      console.error("Erreur lors de l'ajout du régime:", error);
    } finally {
      resetForm(e);
    }
  };
  //Post du nouvel allergène
  const handleAllergen = async (e) => {
    e.preventDefault();
    try {
      await postNewAllergen(newAllergen);
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'allergène:", error);
    } finally {
      resetForm(e);
    }
  };
  //Post de la nouvelle recette
  const handleRecipes = async (e) => {
    e.preventDefault();
    try {
      console.log("recette" + JSON.stringify(newRecipe));
      await postNewRecipe(newRecipe);
    } catch (error) {
      console.error("Erreur lors de l'ajout de la recette:", error);
    } finally {
      resetForm(e);
    }
  };

  return (
    <>
      <Header />
      <div className="container-admin">
        {/* Création utilisateur **********************************************************************************************/}
        <form onSubmit={handleUser} className="form">
          <fieldset className="form">
            <legend>Nouveau utilisateur</legend>
            <label htmlFor="firstName">Prénom :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={newUser.firstName}
              required
              onChange={handleUserChange}
            />
            <br />
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newUser.name}
              required
              onChange={handleUserChange}
            />
            <br />
            <label htmlFor="diet">Sélectionnez des Régimes :</label>
            {!isEmpty(diets) &&
              diets.map((diet, index) => (
                <div key={index} name="diet">
                  <label htmlFor={diet.diet_id}>
                    {diet.diet_id + " " + diet.diet_name}
                  </label>
                  <input
                    type="checkbox"
                    name="selectedDiets"
                    value={diet.diet_id}
                    onChange={handleUserChange}
                  />
                </div>
              ))}
            <br />
            <label htmlFor="allergen">Sélectionnez des allergènes :</label>
            {!isEmpty(allergens) &&
              allergens.map((allergen, index) => (
                <div key={index} name="allergen">
                  <label htmlFor={allergen.allergen_id}>
                    {allergen.allergen_id + " " + allergen.allergen_name}
                  </label>
                  <input
                    type="checkbox"
                    name="selectedAllergens"
                    value={allergen.allergen_id}
                    onChange={handleUserChange}
                  />
                </div>
              ))}
            <button type="submit">Enregistrer</button>
          </fieldset>
        </form>
        {/* Création d'un régime *****************************************************************************************/}
        <form onSubmit={handleDiet} className="form">
          <fieldset className="form">
            <legend>Nouveau régime</legend>
            <label htmlFor="diet">Ajouter un nouveau régime:</label>
            <input
              type="text"
              name="diet"
              id="diet"
              required
              onChange={(e) => setNewDiet(e.target.value)}
            />
            <button type="submit">Ajouter</button>
          </fieldset>
        </form>
        {/* Création d'un allergène *******************************************************************************************/}
        <form onSubmit={handleAllergen} className="form">
          <fieldset className="form">
            <legend>Nouvel allergène</legend>
            <label htmlFor="allergen">Ajouter un allergène</label>
            <input
              type="text"
              id="allergen"
              name="allergen"
              required
              onChange={(e) => setNewAllergen(e.target.value)}
            />
            <button type="submit">Ajouter</button>
          </fieldset>
        </form>
        {/* Création d'une recette**************************************************************************************************/}
        <form onSubmit={handleRecipes} className="form">
          <fieldset className="form">
            <legend>Nouvelle recette</legend>
            <label htmlFor="title">Titre de la recette</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={newRecipe.title}
              onChange={handleRecipeChange}
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              required
              value={newRecipe.description}
              onChange={handleRecipeChange}
            />
            <label htmlFor="preparationTime">Temps de préparation(min)</label>
            <input
              type="number"
              min="1"
              max="1000"
              id="preparationTime"
              name="preparationTime"
              required
              value={newRecipe.preparationTime}
              onChange={handleRecipeChange}
            />
            <label htmlFor="breakTime">Temps de repos(min)</label>
            <input
              type="number"
              min="1"
              max="1000"
              id="breakTime"
              name="breakTime"
              required
              value={newRecipe.breakTime}
              onChange={handleRecipeChange}
            />
            <label htmlFor="cookingTime">Temps de cuisson(min)</label>
            <input
              type="number"
              min="1"
              max="1000"
              id="cookingTime"
              name="cookingTime"
              required
              value={newRecipe.cookingTime}
              onChange={handleRecipeChange}
            />
            <label htmlFor="ingredient">Les ingredients</label>
            <input
              type="text"
              id="ingredient"
              name="ingredient"
              required
              value={newRecipe.ingredient}
              onChange={handleRecipeChange}
            />
            <label htmlFor="step">Les étapes</label>
            <input
              type="text"
              id="step"
              name="step"
              required
              value={newRecipe.step}
              onChange={handleRecipeChange}
            />
            <label htmlFor="diet">Sélectionnez des Régimes :</label>
            {!isEmpty(diets) &&
              diets.map((diet, index) => (
                <div key={index} name="diet">
                  <label htmlFor={diet.diet_id}>
                    {diet.diet_id + " " + diet.diet_name}
                  </label>
                  <input
                    type="checkbox"
                    name="selectedDiets"
                    value={diet.diet_id}
                    onChange={handleRecipeChange}
                  />
                </div>
              ))}

            <label htmlFor="allergen">Sélectionnez des allergènes :</label>
            {!isEmpty(allergens) &&
              allergens.map((allergen, index) => (
                <div key={index} name="allergen">
                  <label htmlFor={allergen.allergen_id}>
                    {allergen.allergen_id + " " + allergen.allergen_name}
                  </label>
                  <input
                    type="checkbox"
                    name="selectedAllergens"
                    value={allergen.allergen_id}
                    onChange={handleRecipeChange}
                  />
                </div>
              ))}

            <label htmlFor="isVisible">Visible que pour les patients :</label>
            <input
              type="checkbox"
              id="isVisible"
              name="isVisible"
              onChange={handleRecipeChange}
            />
            <button type="submit">Ajouter</button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Admin;
