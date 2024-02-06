import { IProduct } from "../utils/AppData";

const BaseUrl = 'http://localhost:3001';

export const addNewProduct = async (product: IProduct) => {
    return await fetch(BaseUrl, {
        method: 'POST', 
        body: JSON.stringify(product)
    })
}