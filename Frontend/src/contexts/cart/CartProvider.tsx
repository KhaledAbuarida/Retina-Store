import { FC, PropsWithChildren, useEffect, useState } from "react";
import { ICartItem } from "../../types/cartTypes";
import { cartContext } from "./CartContext";
import {
  addCartItemAPI,
  getCartItemsAPI,
  removeCartItemAPI,
} from "../../api/cartAPI";
import { useAuth } from "../Auth/AuthContext";
import { calcCartTotalAmount } from "../../utils/cartUtils";
import { useProduct } from "../product/ProductContext";
import { IProduct } from "../../types/productTypes";

const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  // states
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState<number | null>(null);

  // contexts
  const { token } = useAuth();
  const { products } = useProduct();

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

    // apply optimistic UI
    const productToAdd: IProduct | undefined = products.find(
      (p: IProduct) => p._id === productId
    );

    // validate product
    if (!productToAdd) {
      return;
    }

    // reshape the product to cartItem to fit the cart (optimistic ui)
    const cartItem: ICartItem = {
      productId: productToAdd,
      quantity: 1,
      unitPrice: productToAdd.price,
    };

    // check if the product existing in cart or not
    const isExist = cartItems.find(
      (cartItem) => cartItem.productId._id === productId
    );

    if (isExist) {
      return;
    }
    setCartItems([...cartItems, cartItem]);
    console.log(cartItem);

    const cart = await addCartItemAPI({ token, productId, unitPrice });

    setCartItems([...cart.items]);
    setTotalAmount(cart.totalAmount);
  };

  const removeCartItem = async (productId: string) => {
    if (!token) {
      return;
    }
    // deleting the cart item
    const updatedCartItems = cartItems.filter(
      (item) => item.productId._id !== productId
    );

    setCartItems([...updatedCartItems]);

    setTotalAmount(calcCartTotalAmount(updatedCartItems));

    await removeCartItemAPI({ productId, token });
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
