import { API_BASE_URL } from "../constants/apiBaseUrl";

export const getProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`, {
    method: "GET",
  });

  const data = await response.json();
  return data;
};

export const addProduct = async (data: any) => {
  const response = await fetch(`${API_BASE_URL}/products/add`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
};
