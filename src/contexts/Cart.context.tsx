import React, { createContext, useState, ReactNode } from "react";
import { Product } from "../utils/AppData";

interface CartContextType {
  cartItems: Product[];
  addToCart: (item: Product) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const contextValue: CartContextType = {
    cartItems,
    addToCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
