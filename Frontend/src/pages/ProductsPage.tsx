import { Container } from "@mui/material";
import { ProductCard } from "../components/ProductCard";
import { IProduct } from "../types/productTypes";
import { useProduct } from "../contexts/product/ProductContext";

export const ProductList = () => {
  const { products } = useProduct();
  return (
    <Container
      sx={{ paddingTop: "20px", display: "flex", flexWrap: "wrap", gap: 4 }}
    >
      {products.map((product: IProduct) => (
        <ProductCard
          key={product._id}
          {...product}
        />
      ))}
    </Container>
  );
};
