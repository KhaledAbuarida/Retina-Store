import { createContext, useContext } from "react";
import { IProduct } from "../../types/productTypes";

interface ProductContextType {
  products: IProduct[];
}

export const productContext = createContext<ProductContextType>({
  products: [],
});

export const useProduct = () => useContext(productContext);
