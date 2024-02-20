import { BASE_URL } from "./cart.api";


export const getProducts = async () => {
    const data = await fetch(`${BASE_URL}/products`).then((res) => res.json());
    return data;
};