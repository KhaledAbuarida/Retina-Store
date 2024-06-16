import { API_BASE_URL } from "../constants/apiBaseUrl";

interface cartItemData {
  product: string;
  unitPrice: number;
  quantity: number;
}

// get all cart items
export const getCartItems = async () => {
  const response = await fetch(`${API_BASE_URL}/cart`, {
    method: "GET",
  });

  const data = await response.json();

  console.log(data);
  return data;
};

// delete item from the cart
export const deleteCartItem = async (productId: string) => {
  const response = await fetch(`${API_BASE_URL}/cart/delete//${productId}`, {
    method: "DELETE",
  });

  return response;
};

export const addItemToCart = async ({
  product,
  quantity,
  unitPrice,
}: cartItemData) => {
  const response = await fetch(`${API_BASE_URL}/cart/add/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ product, quantity, unitPrice }),
  });

  return response.status;
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
  console.log(response.status);
  return response;
};
