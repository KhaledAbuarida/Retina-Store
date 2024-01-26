import { Container } from "@mui/material"
import { ProductCard } from "./ProductCard"
import { Product, productsList } from "../utils/AppData"

interface Props {
  onAddToCart: (product:Product) => void;
}

export const ProductList = ({onAddToCart}: Props) => {
  return (
    <Container sx={{padding: "20px", display: 'flex', flexWrap: 'wrap', gap: 4}}>
      
      {productsList.map(product => (
        <ProductCard product={product} handleAddToCart={(product) => onAddToCart(product)} />
      ))}
    </Container>
        
  )
}
