import { FC, PropsWithChildren, useEffect, useState } from "react";
import { ICartItem } from "../../types/cart";
import { cartContext } from "./CartContext";
import { getCartItems } from "../../api/cartAPI";

const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const cartItems = await getCartItems();
    };

    fetchCartItems();
  }, []);

  return (
    <cartContext.Provider value={{ cartItems }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
