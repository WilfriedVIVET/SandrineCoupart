import axios from "axios";

/*************************ADMIN*************************************** */
/********************************************************************* */
// Nouvel utilisateur:
export const postNewUser = async (newUser) => {
  try {
    const response = await axios.post(
      "https://api-coupart-2d50e80c9143.herokuapp.com/postUser.php",
      JSON.stringify(newUser)
    );
    alert(JSON.stringify(response.data.success));
  } catch (error) {
    throw error;
  }
};
/****************************************************************** */
//Nouveau régime:
export const postNewDiet = async (diet) => {
  try {
    const response = await axios.post(
      "https://api-coupart-2d50e80c9143.herokuapp.com/postDiet.php",
      JSON.stringify(diet)
    );
    alert(JSON.stringify(response.data.success));
  } catch (error) {
    throw error;
  }
};

/****************************************************************** */
// Nouveau allergène:
export const postNewAllergen = async (allergen) => {
  try {
    const response = await axios.post(
      "https://api-coupart-2d50e80c9143.herokuapp.com/postAllergen.php",
      JSON.stringify(allergen)
    );
    alert(JSON.stringify(response.data.success));
  } catch (error) {
    throw error;
  }
};

/***************************************************************** */
//Nouvelle recette:
export const postNewRecipe = async (recipe) => {
  try {
    const response = await axios.post(
      "https://api-coupart-2d50e80c9143.herokuapp.com/postRecipe.php",
      JSON.stringify(recipe)
    );
    alert(JSON.stringify(response.data.success));
  } catch (error) {
    throw error;
  }
};

/*************************************USER*************************** */
//Fonction qui envoi l'avis est la note de l'utilisateur concerné.

export const postNewNotice = async (notice) => {
  try {
    await axios.post(
      "https://api-coupart-2d50e80c9143.herokuapp.com/postNotice.php",
      notice
    );
  } catch (error) {
    alert("Erreur", error);
  }
};
