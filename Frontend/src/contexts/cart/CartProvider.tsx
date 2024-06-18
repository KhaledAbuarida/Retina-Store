import { FC, PropsWithChildren, useEffect, useState } from "react";
import { ICartItem } from "../../types/cartTypes";
import { cartContext } from "./CartContext";
import {
  addCartItemAPI,
  getCartItemsAPI,
  removeCartItemAPI,
} from "../../api/cartAPI";
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

  const addCartItem = async (productId: string, unitPrice: number) => {
    if (!token) {
      return;
    }

    const cart = await addCartItemAPI({ token, productId, unitPrice });
    setCartItems([...cart.items]);
    setTotalAmount(cart.totalAmount);
  };

  const removeCartItem = async (productId: string) => {
    if (!token) {
      return;
    }
    // deleting the cart item
    setCartItems([
      ...cartItems.filter((item) => item.productId._id !== productId),
    ]);

    const cart = await removeCartItemAPI({ productId, token });

    setTotalAmount(cart.totalAmount);
    setTotalAmount(cart.totalAmount);
  };

  return (
    <cartContext.Provider
      value={{ cartItems, totalAmount, addCartItem, removeCartItem }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
