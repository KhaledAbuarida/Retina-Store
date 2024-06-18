export interface addItemToCartProps {
  userId: string;
  productId: string;
  unitPrice: number;
}

export interface deleteItemCartProps {
  userId: string;
  productId: string;
}

export interface clearCartProps {
  userId: string;
}

export interface getCartItemsProps {
  userId: string;
}

export interface getCartForUserProps {
  userId: string;
  populatedItems?: boolean;
}

export interface updateCartItemQuantityProps {
  userId: string;
  productId: string;
  quantity: number;
}
