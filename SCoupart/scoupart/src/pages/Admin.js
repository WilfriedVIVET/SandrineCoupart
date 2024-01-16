import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { useSelector } from "react-redux";
import { isEmpty } from "../component/Utils";
import { getDiets } from "../Redux/actions/diets.action";
import { getAllergens } from "../Redux/actions/allergens.action";
import axios from "axios";

import store from "../Redux/store/store";

const Admin = () => {
  useEffect(() => {
    store.dispatch(getDiets());
    store.dispatch(getAllergens());
  }, []);

  const diets = useSelector((state) => state.dietsReducer);
  const allergens = useSelector((state) => state.allergensReducer);
  const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    diet: "",
    selectedAllergens: [],
  });

  const postUser = async (formData) => {
    console.log("formdata = " + JSON.stringify(formData));
    try {
      const response = await axios.post(
        "http://localhost/API_COUPART/API/postUser.php",
        formData
      );

      console.log("data envoyé avec succès ", response);
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
            ? [...prevData[name], value]
            : prevData[name].filter((item) => item !== value)
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postUser(formData);
  };

  return (
    <>
      <Header />
      <div className="container-admin">
        <form onSubmit={handleSubmit} className="form">
          <fieldset className="form">
            <legend>Nouveau utilisateur</legend>
            <label htmlFor="firstName">Prénom :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />

            <br />
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="diet">Sélectionnez un Régime :</label>
            <select
              id="diet"
              name="diet"
              value={formData.diet}
              onChange={handleChange}
            >
              {!isEmpty(diets) &&
                diets.map((diet, index) => (
                  <option key={index} value={diet.diet_id}>
                    {diet.diet_id + " " + diet.diet_name}
                  </option>
                ))}
            </select>
            <br />
            <label htmlFor="allergen">Sélectionnez des allergènes :</label>
            {!isEmpty(allergens) &&
              allergens.map((allergen, index) => (
                <div key={index}>
                  <label htmlFor={allergen.allergen_id}>
                    {allergen.allergen_id + " " + allergen.allergen_name}
                  </label>
                  <input
                    type="checkbox"
                    id="allergen"
                    name="selectedAllergens"
                    value={allergen.allergen_id}
                    checked={formData.selectedAllergens.includes(
                      String(allergen.allergen_id)
                    )}
                    onChange={handleChange}
                  />
                </div>
              ))}

            <button type="submit">Enregistrer</button>
          </fieldset>
        </form>
        <div className="newUser"></div>
        <div className="newRecipe"></div>
        <div className="newAllergen"></div>
        <div className="newDiet"></div>
      </div>
    </>
  );
};

export default Admin;
