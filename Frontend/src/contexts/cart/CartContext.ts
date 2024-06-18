import { createContext, useContext } from "react";
import { ICartItem } from "../../types/cartTypes";

interface cartContextType {
  cartItems: ICartItem[];
  totalAmount: number | null;
  addCartItem: (productId: string, unitPrice: number) => void;
  removeCartItem: (productId: string) => void;
}

export const cartContext = createContext<cartContextType>({
  cartItems: [],
  totalAmount: null,
  addCartItem: () => {},
  removeCartItem: () => {},
});

export const useCart = () => useContext(cartContext);
