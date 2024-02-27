import { BaseUrl } from "../App";


export const getProducts = async () => {
    const response = await fetch(`${BaseUrl}/products`);

    const data = await response.json();

    return data;
};

export const addProduct = async (data: any) => {
    const response = await fetch(`${BaseUrl}/products/add`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response;
}