import INGREDIENTS from "../../App";
import Food from "../Food/Food";
import { FoodItem, Iingredient } from "../../types"
import React from "react";



interface IngredientsProps {
  ingredients: Iingredient[];
  addIngredient: (name: string) => void;
  deleteIngredient: (name: string) => void
  count: number;
  orders: FoodItem[];
}

const Ingredient: React.FC<IngredientsProps> = ({
  ingredients,
  addIngredient,
  deleteIngredient,
  orders,

}) => {
  return (
    <div className="food-list">
      {ingredients.map((ingredient) => {
        const orderItem = orders.find(
          (item: FoodItem) => item.name === ingredient.name
        );
        return (
          <Food
            key={ingredient.name}
            name={ingredient.name}
            img={ingredient.image}
            addIngredient={() => addIngredient(ingredient.name)}
            deleteImg={ingredient.deleteImage}
            deleteIngredient={() => deleteIngredient(ingredient.name)}
            count={orderItem ? orderItem.count : 0}
          />
        );
      })}
    </div>
  );
};

export default Ingredient