import React, { createContext, useState, ReactNode, useEffect } from "react";
import { ICartItem } from "../utils/AppData";

interface CartContextType {
  cartItems: ICartItem[];
  addToCart: (item: ICartItem) => void;
  deleteCartItem: (id: number) => void;
  totalPrice: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
	// Calculate total price whenever cartItems or the quantity of any cartItem changes
	const newTotalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
	setTotalPrice(newTotalPrice);
  }, [cartItems]);

  

  // ADDING TO CART
  const addToCart = (item: ICartItem) => {
	const isCartItemExist = cartItems.find((cartItem) => cartItem.id === item.id);
	if (!isCartItemExist) {
	//   setCartItems((prevItems) => [...prevItems, item]);
		setCartItems([...cartItems, item])
	}
  };

  // DELETE FROM CART 
  const deleteCartItem = (id: number) => {
	setCartItems(cartItems.filter((item) => item.id !== id));
  }

  const contextValue: CartContextType = {
	cartItems,
	addToCart,
	deleteCartItem,
	totalPrice,
  };

  return (
	<CartContext.Provider value={contextValue}>
	  {children}
	</CartContext.Provider>
  );
};
