import { Container } from "@mui/material";
import { ProductCard } from "../components/ProductCard";
import { ICartItem, IProduct } from "../utils/AppData";

interface Props {
  productsList: IProduct[];
  setCartItems: React.Dispatch<React.SetStateAction<ICartItem[]>>;
  cartItems: ICartItem[];
}

export const ProductList = ({
  productsList,
  setCartItems,
  cartItems,
}: Props) => {
  return (
    <Container
      sx={{ paddingTop: "20px", display: "flex", flexWrap: "wrap", gap: 4 }}
    >
      {productsList.map((product) => (
        <ProductCard
          key={product._id!}
          product={product}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
      ))}
    </Container>
  );
};
