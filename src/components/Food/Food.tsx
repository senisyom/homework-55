
interface FoodProps {
    name: string;
    img: string;
    addIngredient: () => void;
}

const Food: React.FC<FoodProps> = ({name, img, addIngredient}) => {
    return (
      <div className="food">
        <button onClick={addIngredient}>
          <img src={img} alt={name} className="food-img" />
        </button>
        <div className="">
          <div className="food-name">{name}</div>
        </div>
      </div>
    );
}

export default Food