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
    setOrders((prevOrders) =>
      prevOrders.map((item) =>
        item.name === name ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  return (
    <div className="Container">
      <div className="left-bar">
        <Ingredient ingredients={INGREDIENTS} addIngredient={addIngredient} />
      </div>

      <div className="right-bar">
        <Burger ingredients={INGREDIENTS} />
      </div>
    </div>
  );
};

export default App;
