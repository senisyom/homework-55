import { useState } from "react";
import "./App.css";
import burgerMeat from "./assets/burger-meat.png";
import burgerBacon from "./assets/burger-bacon.png";
import burgerSalad from "./assets/burger-salad.png";
import burgerCheese from "./assets/burger-cheese.png";
import deleteButton from "./assets/delete-buttonn.png";
import Ingredient from "./components/Ingredient/Ingredient";
import Burger from "./components/Burger/Burger";
import { Iingredient } from "./types";

const App = () => {
  interface FoodItem {
    name: string;
    count: number;
  }

  const [totalPrice, setTotalPrice] = useState(0);

  const INGREDIENTS: Iingredient[] = [
    { name: "Meat", price: 80, image: burgerMeat, deleteImage: deleteButton },
    {
      name: "Cheese",
      price: 50,
      image: burgerCheese,
      deleteImage: deleteButton,
    },
    { name: "Salad", price: 10, image: burgerSalad, deleteImage: deleteButton },
    { name: "Bacon", price: 60, image: burgerBacon, deleteImage: deleteButton },
  ];

  const [orders, setOrders] = useState<FoodItem[]>(
    INGREDIENTS.map((item) => ({
      name: item.name,
      count: 0,
    }))
  );

  const addIngredient = (name: string) => {
    setOrders((prevOrders) => {
      const newPrice = prevOrders.map((item) =>
        item.name === name ? { ...item, count: item.count + 1 } : item
      );

      const ingredient = INGREDIENTS.find((item) => item.name === name);
      if (ingredient) {
        setTotalPrice((prevTotal) => prevTotal + ingredient.price);
      }

      return newPrice;
    });
  };

  return (
    <div className="Container">
      <div className="left-bar">
        <div className="ingredient-top">Ingredients</div>
        <Ingredient ingredients={INGREDIENTS} addIngredient={addIngredient} />
      </div>
      <div className="right-bar">
        <div className="burger-top">Burger</div>
        <Burger ingredients={INGREDIENTS} totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default App;
