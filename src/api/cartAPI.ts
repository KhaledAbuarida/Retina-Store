import { API_BASE_URL } from "../constants/apiBaseUrl";
import { getCartItemsAPIParams } from "../types/cartTypes";

// get all cart items for user
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

// delete item from the cart
export const deleteCartItem = async (productId: string) => {
  const response = await fetch(`${API_BASE_URL}/cart/delete//${productId}`, {
    method: "DELETE",
  });

  return response;
};

// export const addItemToCart = async ({ product, quantity, unitPrice }) => {
//   const response = await fetch(`${API_BASE_URL}/cart/add/`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ product, quantity, unitPrice }),
//   });

//   return response.status;
// };

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
  console.log(response.status);
  return response;
};
