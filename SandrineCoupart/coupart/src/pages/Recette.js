import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Card from "../components/Cards";

const Recette = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/API_COUPART/API/recettes")
      .then((res) => setData(res.data));
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <h1>Recettes</h1>
        <ul>
          <li className="recetteList">
            {data.map((recette, index) => (
              <Card key={index} recette={recette} />
            ))}
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Recette;
