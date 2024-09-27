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
    <div>
      {ingredients.map((ingredient) => (
        <Food
          key={ingredient.name}
          name={ingredient.name}
          img={ingredient.image}
          addIngredient={() => addIngredient(ingredient.name)}
        />
      ))}
    </div>
  );
};

export default Ingredient