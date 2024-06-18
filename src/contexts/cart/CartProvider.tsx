import { FC, PropsWithChildren, useEffect, useState } from "react";
import { ICartItem } from "../../types/cartTypes";
import { cartContext } from "./CartContext";
import { getCartItemsAPI } from "../../api/cartAPI";
import { useAuth } from "../Auth/AuthContext";

const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  // states
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState<number | null>(null);

  // token form auth context
  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      return;
    }
    const fetchCartItems = async () => {
      const cart = await getCartItemsAPI({ token });
      setCartItems(cart.items);
      setTotalAmount(cart.totalAmount);
    };

    fetchCartItems();
  }, [token]);

  return (
    <cartContext.Provider value={{ cartItems, totalAmount }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
