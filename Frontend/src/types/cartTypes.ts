import { IProduct } from "./productTypes";

// cart item type
export interface ICartItem {
  _id?: string;
  productId: IProduct;
  quantity: number;
  unitPrice: number;
}

// cart type
export interface ICart {
  userId: string;
  items: ICartItem[];
  totalAmount: number;
  status?: "active" | "completed";
}

// add cart item params for cart api POST function
export interface addCartItemAPIParams {
  token: string;
  productId: string;
  unitPrice: number;
}

// get cart items params for cart api GET function
export interface getCartItemsAPIParams {
  token: string;
}

// remove cart item params for cart api DELETE function
export interface removeCartItemAPIParams {
  productId: string;
  token: string;
}
