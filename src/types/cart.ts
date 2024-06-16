export interface ICartItem {
  productId: string;
  quantity: number;
  unitPrice: number;
}

export interface ICart {
  userId: string;
  items: ICartItem[];
  totalAmount: number;
  status?: "active" | "completed";
}
