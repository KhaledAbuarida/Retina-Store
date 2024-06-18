import { FC, PropsWithChildren, useEffect, useState } from "react";
import { productContext } from "./ProductContext";
import { getProductsAPI } from "../../api/productAPI";
import { IProduct } from "../../types/productTypes";

const ProductProvider: FC<PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductsAPI();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <productContext.Provider value={{ products }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
