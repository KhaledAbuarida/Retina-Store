import { createContext, useContext } from "react";
import { ICartItem } from "../../types/cartTypes";

interface cartContextType {
  cartItems: ICartItem[];
  totalAmount: number | null;
}

export const cartContext = createContext<cartContextType>({
  cartItems: [],
  totalAmount: null,
});

export const useCart = () => useContext(cartContext);
