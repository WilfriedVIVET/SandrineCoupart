import React, { useState } from "react";
import { useSelector } from "react-redux";
import { postNewNotice } from "../Utils/PostUtils";
import { isEmpty } from "../Utils/Utils";

//Avis et note des recettes personnalisées.
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
      alert("Erreur lors de la publication de l'avis :", error.message);
    } finally {
      reload();
      setClicked(!clicked);
    }
  };

  const reload = () => {
    recipe.opinion = notice.opinion;
    recipe.note = notice.note;
  };

  return (
    <div>
      <form onSubmit={(e) => handleNotice(e)}>
        <br />
        <div className="notice">
          <div className="avis">
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
                className="input-avis"
                placeholder="Laissez votre avis"
                value={notice.opinion}
                onChange={(e) =>
                  setNotice({ ...notice, opinion: e.target.value })
                }
              />
            )}
          </div>

          <div className="note">
            <label htmlFor="note">
              <strong>Note :</strong>
            </label>
            {clicked ? (
              recipe.note ? (
                <strong>{recipe.note}</strong>
              ) : (
                <strong>0</strong>
              )
            ) : (
              <input
                type="number"
                id="note"
                name="note"
                min="0"
                max="5"
                value={notice.note}
                className="input-note"
                onChange={(e) => setNotice({ ...notice, note: e.target.value })}
              />
            )}
            <strong>/5</strong>
          </div>
          <button type="submit">✏️ Editer</button>
        </div>
      </form>
    </div>
  );
};

export default Notice;
