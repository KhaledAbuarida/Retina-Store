import { ICartItem } from "../utils/AppData";

export const BASE_URL = "http://localhost:3001";
const USER_ID = "65c810b861892929a3d888ac";

interface cartItemData {
    product: string;
    unitPrice: number;
    quantity: number;
}

// get all cart items
export const getCartItems = async () => {
    const response = await fetch(`${BASE_URL}/cart/${USER_ID}`).then(res => res.json());

    return response;
}


// delete item from the cart
export const deleteCartItem = async (productId: string) => {
    const response = await fetch(`${BASE_URL}/cart/delete/${USER_ID}/${productId}`, {
        method: "DELETE",
    });

    return response;
}

export const addItemToCart = async ({ product, quantity, unitPrice }: cartItemData) => {
    const response = await fetch(`${BASE_URL}/cart/add/${USER_ID}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product, quantity, unitPrice })
    })

    return response.status;
}

export const updateCartItemQuantity = async (productId: string, quantity: number) => {
    const response = await fetch(`${BASE_URL}/cart/quantity/${USER_ID}/${productId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity })
    });
    console.log(response.status)
    return response;
}