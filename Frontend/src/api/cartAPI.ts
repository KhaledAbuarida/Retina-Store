import { API_BASE_URL } from "../constants/apiBaseUrl";
import {
  addCartItemAPIParams,
  getCartItemsAPIParams,
  removeCartItemAPIParams,
} from "../types/cartTypes";

// get cart items for user
export const getCartItemsAPI = async ({ token }: getCartItemsAPIParams) => {
  const response = await fetch(`${API_BASE_URL}/cart`, {
    method: "GET",
    headers: {
      "Content-Type": "application.json",
      authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  //return the cart
  return data;
};

export const addCartItemAPI = async ({
  token,
  productId,
  unitPrice,
}: addCartItemAPIParams) => {
  const response = await fetch(`${API_BASE_URL}/cart/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productId, unitPrice }),
  });

  const data = await response.json();

  // return the updated cart
  return data;
};

// delete item from the cart
export const removeCartItemAPI = async ({
  productId,
  token,
}: removeCartItemAPIParams) => {
  const response = await fetch(`${API_BASE_URL}/cart/items/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application.json",
      authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  // return updated cart
  return data;
};

export const updateCartItemQuantity = async (
  productId: string,
  quantity: number
) => {
  const response = await fetch(
    `${API_BASE_URL}/cart/quantity/${API_BASE_URL}/${productId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    }
  );
  return response;
};
