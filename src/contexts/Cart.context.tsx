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
  const [cartItems, setCartItems] = useState<Product[]>([{id: 1, name: 'Lenovo G3', price: 20999, image: 'https://m.media-amazon.com/images/I/516F3sfYp4L.__AC_SY300_SX300_QL70_ML2_.jpg',category: 'laptop', quantity: 1},]);
  


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
