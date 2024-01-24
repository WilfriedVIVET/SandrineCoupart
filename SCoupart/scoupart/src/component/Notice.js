import React, { useState } from "react";
import { useSelector } from "react-redux";
import { postNewNotice } from "../Utils/PostUtils";
import { isEmpty } from "../Utils/Utils";

const Notice = ({ recipe }) => {
  const userId = useSelector((state) => state.userIdReducer);
  const personalRecipes = useSelector((state) => state.personalRecipes);

  const [clicked, setClicked] = useState(true);
  const [notice, setNotice] = useState({
    opinion: "",
    note: "",
    user: "",
    recipeId: "",
  });

  const handleNotice = async (e) => {
    console.log("que vaut recipe :", notice);
    e.preventDefault();
    if (!isEmpty(userId) && !isEmpty(personalRecipes)) {
      setNotice({
        ...notice,
        user: userId[0].user_id,
        recipeId: recipe.recipe_id,
      });
    }
    await postNewNotice(notice);
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <form onSubmit={(e) => handleNotice(e)}>
      <div className="notice">
        <div>
          <label htmlFor="opinion">Avis :</label>
          {clicked ? (
            <strong>{recipe.opinion}</strong>
          ) : (
            <input
              type="text"
              name="opinion"
              id="opinion"
              placeholder="Laissez votre avis"
              value={notice.opinion}
              onChange={(e) =>
                setNotice({ ...notice, opinion: e.target.value })
              }
            />
          )}
        </div>
        <div>
          <label htmlFor="note">Note :</label>
          {clicked ? (
            <strong>{recipe.note}</strong>
          ) : (
            <input
              type="number"
              id="note"
              name="note"
              min="0"
              max="5"
              value={notice.note}
              onChange={(e) => setNotice({ ...notice, note: e.target.value })}
            />
          )}
          <span>/5</span>
        </div>
        <button onClick={handleClick}>Ajouter avis et note</button>
        <button type="submit">Envoyer</button>
      </div>
    </form>
  );
};

export default Notice;
