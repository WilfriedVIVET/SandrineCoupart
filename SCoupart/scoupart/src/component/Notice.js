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
    e.preventDefault();

    try {
      if (!isEmpty(userId) && !isEmpty(personalRecipes)) {
        setNotice({
          ...notice,
          user: userId[0].user_id,
          recipeId: recipe.recipe_id,
        });
      }

      await postNewNotice(notice);
    } catch (error) {
      console.error("Erreur lors de la publication de l'avis :", error.message);
    } finally {
      // Exécuté après que postNewNotice est terminé, qu'il ait réussi ou échoué
      reload();
      setClicked(!clicked);
    }
  };

  const reload = () => {
    recipe.opinion = notice.opinion;
    recipe.note = notice.note;
  };

  return (
    <form onSubmit={(e) => handleNotice(e)}>
      <div className="notice">
        <div>
          <label htmlFor="opinion">
            <strong>Avis : </strong>
          </label>
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
          <label htmlFor="note">
            <strong>Note : </strong>
          </label>
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
          <span className="score">/5</span>
        </div>
        <button type="submit">Ajouter avis et note</button>
      </div>
    </form>
  );
};

export default Notice;
