import { ICartItem } from "../types/cartTypes";

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
