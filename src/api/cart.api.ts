
export const BASE_URL = "http://localhost:3001";
const USER_ID = "65c9165bea830c15f58eee4a";

// get all cart items
export const getCartItems = async () => {
    const response = await fetch(`${BASE_URL}/cart/${USER_ID}`).then(res => res.json());

    return response;
}


// delete item from the cart
export const deleteCartItem = async (productId: string) => {
    const response = await fetch(`${BASE_URL}/cart/${USER_ID}/${productId}`);

    console.log(response);
    return response;
}