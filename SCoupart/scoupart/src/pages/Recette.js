import Header from "../component/Header";
import Card from "../component/Cards";

import { useSelector } from "react-redux";
import { isEmpty } from "../component/Utils";

const Recette = () => {
  const recip = useSelector((state) => state.recipesReducer);
  const userId = useSelector((state) => state.userIdReducer);
  const personalRecipes = useSelector((state) => state.personalRecipes);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="card-container">
          {!isEmpty(recip) &&
            isEmpty(userId) &&
            recip.map((recips, index) => <Card recip={recips} key={index} />)}

          {!isEmpty(personalRecipes) &&
            !isEmpty(userId) &&
            personalRecipes.map((pRecipes, index) => (
              <Card recip={pRecipes} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Recette;
