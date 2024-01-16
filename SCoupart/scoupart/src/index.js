import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//Redux
import { Provider } from "react-redux";
import store from "./Redux/store/store";
import { getRecipes } from "./Redux/actions/recipes.action";

const root = ReactDOM.createRoot(document.getElementById("root"));

store.dispatch(getRecipes());

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
