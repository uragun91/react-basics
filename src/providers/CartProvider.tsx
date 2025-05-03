import { createContext, useContext, useState } from "react";
import { Product } from "../types";

const getCartFromLocalStorage = (): Product[] => {
  const productsString = localStorage.getItem("cart");

  try {
    return JSON.parse(productsString ?? "");
  } catch (e) {
    console.log(e);
    return [];
  }
};

const CartContext = createContext<{
  cart: Product[];
  add: (product: Product) => void;
}>({ cart: [], add: () => {} });

export function CartProvider({ children }) {
  const [cart, setCart] = useState<Product[]>(getCartFromLocalStorage());

  const add = (product: Product) => {
    const newState = [...cart];
    newState.push(product);
    setCart(newState);

    localStorage.setItem("cart", JSON.stringify(newState));
  };

  return (
    <CartContext.Provider value={{ cart, add }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
