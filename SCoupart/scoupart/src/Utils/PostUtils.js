import axios from "axios";

/*************************ADMIN*************************************** */
/********************************************************************* */
// Nouvel utilisateur:
export const postNewUser = async (newUser) => {
  try {
    await axios.post("http://localhost/API_COUPART/API/postUser.php", newUser);
  } catch (error) {
    console.log("Erreur lors de l'ajout utilisateur", error.message);
    throw error; // Renvoie l'erreur pour une gestion ultérieure
  }
};
/****************************************************************** */
//Nouveau régime:
export const postNewDiet = async (diet) => {
  try {
    await axios.post(
      "http://localhost/API_COUPART/API/postDiet.php",
      JSON.stringify(diet)
    );
  } catch (error) {
    console.error("Erreur:", error);
  }
};

/****************************************************************** */
// Nouveau allergène:
export const postNewAllergen = async (allergen) => {
  try {
    await axios.post(
      "http://localhost/API_COUPART/API/postAllergen.php",
      JSON.stringify(allergen)
    );
  } catch (error) {
    console.error("Erreur lors de l'ajout d'allergène:", error);
  }
};

/***************************************************************** */
//Nouvelle recette:
export const postNewRecipe = async (recipeData) => {
  try {
    axios.post("http://localhost/API_COUPART/API/postRecipe.php", recipeData);
  } catch (error) {
    console.error("Erreur:", error);
  }
};

/*************************************USER*************************** */
//Fonction qui envoi l'avis est la note de l'utilisateur concerné.

export const postNewNotice = async (notice) => {
  try {
    console.log("notice = " + JSON.stringify(notice));
    await axios.post("http://localhost/API_COUPART/API/postNotice.php", notice);
  } catch (error) {
    console.error("Erreur", error);
  }
};
