
export interface Iingredient {
  name: string;
  price: number;
  image: string;
  deleteImage: string
}

export interface FoodItem {
  name: string;
  count: number;
}

export interface BurgerProps {
  orders: FoodItem[];
  ingredients: Iingredient[];
  totalPrice: number;
}
