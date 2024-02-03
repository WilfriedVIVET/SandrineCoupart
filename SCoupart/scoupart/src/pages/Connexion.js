import React, { useEffect, useRef, useState } from "react";
import Header from "../component/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getUserId } from "../Redux/actions/userId.action";
import { getPersonalRecipes } from "../Redux/actions/personalRecipes.action";
import store from "../Redux/store/store";
import { useSelector } from "react-redux";
import { getMode } from "../Redux/actions/mode.action";
store.dispatch(getMode());

//Page de connexion.
const Connexion = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userIdReducer);
  const url = useSelector((state) => state.modeReducer);

  const [identity, setIdentity] = useState({
    name: "",
    firstName: "",
  });

  const spanError = useRef(null);

  const resetSpan = () => {
    spanError.current.innerText = "";
  };

  const handleChange = (e) => {
    resetSpan();
    const { name, value } = e.target;

    // Appliquer le remplacement uniquement si le champ est "firstName" ou "name"
    const replacedValue = ["firstName", "name"].includes(name)
      ? value.replace(/ /g, "-")
      : value;

    setIdentity((prevIdentity) => ({
      ...prevIdentity,
      [name]: replacedValue,
    }));
  };

  useEffect(() => {
    if (user && user.length > 0) {
      if (user[0].name === "coupart" && user[0].firstname === "sandrine") {
        navigate("../admin");
      } else {
        navigate("../recettes");
      }
    }
  }, [user, navigate]);

  //Verification de la presence en base de donné de l utilisateur.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        url + `users/${identity.name}/${identity.firstName}`
      );
      console.log(
        "voir url : " + url + `users/${identity.name}/${identity.firstName}`
      );

      if (res.data > 0) {
        await store.dispatch(getUserId(url, identity.name, identity.firstName));
        await store.dispatch(
          getPersonalRecipes(url, identity.name, identity.firstName)
        );
      } else {
        spanError.current.innerText = "Utilisateur non répertorié";
      }
    } catch (error) {}
  };

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit} className="formulaire">
          <h2>Connexion</h2>
          <div className="trait"></div>
          <br />
          <input
            type="text"
            name="firstName"
            placeholder="Votre prénom"
            required
            autoComplete="off"
            value={identity.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            autoComplete="off"
            value={identity.name}
            onChange={handleChange}
          />
          <span className="erreur" ref={spanError}></span>
          <button className="btn" type="submit">
            Connexion
          </button>
        </form>
      </div>
    </>
  );
};

export default Connexion;
