import axios from "axios";

/*************************ADMIN*************************************** */
/********************************************************************* */
// Nouvel utilisateur:
export const postNewUser = async (newUser) => {
  try {
    const response = await axios.post(
      "http://localhost/API_COUPART/API/postUser.php",
      JSON.stringify(newUser)
    );
    alert(JSON.stringify(response.data.success));
  } catch (error) {
    throw error; // Renvoie l'erreur pour une gestion ultérieure
  }
};
/****************************************************************** */
//Nouveau régime:
export const postNewDiet = async (diet) => {
  try {
    const response = await axios.post(
      "http://localhost/API_COUPART/API/postDiet.php",
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
      "http://localhost/API_COUPART/API/postAllergen.php",
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
      "http://localhost/API_COUPART/API/postRecipe.php",
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
    await axios.post("http://localhost/API_COUPART/API/postNotice.php", notice);
  } catch (error) {
    alert("Erreur", error);
  }
};
