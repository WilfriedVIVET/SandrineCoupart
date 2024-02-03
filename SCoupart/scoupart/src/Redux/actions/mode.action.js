export const GET_MODE = "GET_MODE";

export const getMode = () => {
  return async (dispatch) => {
    //verification variable d'environnement.
    const mode = process.env.NODE_ENV;
    let url = "";

    try {
      if (mode === "production") {
        alert("mode production" + mode);
        url = "https://api-coupart-cf7ba8759ba8.herokuapp.com/";
      } else {
        alert("mode developpement" + mode);
        url = "http://localhost/API_COUPART/API/";
      }
      dispatch({ type: GET_MODE, payload: url });
    } catch (error) {
      alert("probleme global" + error);
    }
  };
};
