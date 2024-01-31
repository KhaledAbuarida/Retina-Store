import React, { createContext, useState, ReactNode } from "react";
import { ICartItem } from "../utils/AppData";

interface CartContextType {
  cartItems: ICartItem[];
  addToCart: (item: ICartItem) => void;
  deleteCartItem: (id: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  


  const addToCart = (item: ICartItem) => {

    const isCartItemExist = cartItems.find((cartItem) => cartItem.id === item.id);
    
    if(!isCartItemExist){
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  const deleteCartItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }

  const contextValue: CartContextType = {
    cartItems,
    addToCart,
    deleteCartItem
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
