import React from "react";
import "./Burger.css"
import { BurgerProps } from "../../types";


const Burger: React.FC <BurgerProps>= ({ totalPrice}) => {
    return (
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        <div className="Salad"></div>
        <div className="Cheese"></div>
        <div className="Meat"></div>
        <div className="BreadBottom"></div>
        <div className="total">Price: {totalPrice}</div>
      </div>
    );
}

export default Burger