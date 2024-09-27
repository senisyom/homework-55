import INGREDIENTS from "../../App";
import Food from "../Food/Food";
import { Iingredient } from "../../types"
import React from "react";



interface IngredientsProps {
  ingredients: Iingredient[];
  addIngredient: (name: string) => void;
}

const Ingredient: React.FC<IngredientsProps> = ({ ingredients, addIngredient }) => {
  return (
    <div className="food-list">
      {ingredients.map((ingredient) => (
        <Food
          key={ingredient.name}
          name={ingredient.name}
          img={ingredient.image}
          addIngredient={() => addIngredient(ingredient.name)}
          deleteImg={ingredient.deleteImage}
          count={0}
        />
      ))}
    </div>
  );
};

export default Ingredient