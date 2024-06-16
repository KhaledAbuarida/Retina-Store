import { createContext, useContext } from "react";
import { ICartItem } from "../../types/cart";

interface cartContextType {
  cartItems: ICartItem[];
}

export const cartContext = createContext<cartContextType>({
  cartItems: [],
});

export const useCart = () => useContext(cartContext);
