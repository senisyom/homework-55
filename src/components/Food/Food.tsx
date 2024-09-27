interface FoodProps {
  name: string;
  img: string;
  deleteImg: string;
  count: number;
  addIngredient: () => void;
  deleteIngredient: () => void;
}

const Food: React.FC<FoodProps> = ({
  name,
  img,
  addIngredient,
  deleteIngredient,
  count,
  deleteImg,
 }) => {
  return (
    <div className="food">
      
      <button onClick={addIngredient}>
        <img src={img} alt={name} className="food-img" />
      </button>
      <div className="food-name">{name}</div>
      <div className="count">X {count} </div>
      <button onClick={deleteIngredient} className="delete-button">
              <img src={deleteImg} alt="Delete" />
      </button>
    </div>
  );
};

export default Food;
