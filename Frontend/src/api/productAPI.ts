import { API_BASE_URL } from "../constants/apiBaseUrl";

export const getProductsAPI = async () => {
  const response = await fetch(`${API_BASE_URL}/product/items`, {
    method: "GET",
  });

  const data = await response.json();
  return data;
};

export const addProductAPI = async (data: any) => {
  const response = await fetch(`${API_BASE_URL}/products/add`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
};
