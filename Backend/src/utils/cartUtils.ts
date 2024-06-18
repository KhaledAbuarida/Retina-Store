import { cartModel, ICart, ICartItem } from "../models/cartModel";
import { getCartForUserProps } from "../types/cartServicesProps";

// create cart for user
export const createCartForUser = async (userId: string) => {
  try {
    return await cartModel.create({ userId });
  } catch (err: any) {
    return err;
  }
};

// calculate total amount of user cart
export const calcCartTotalAmount = (items: ICartItem[]): number => {
  try {
    const cartTotalAmount: number = items.reduce(
      (acc: number, item: any) => item.quantity * item.unitPrice + acc,
      0
    );

    return cartTotalAmount;
  } catch (err: any) {
    return err;
  }
};
