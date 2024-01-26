import { Container } from "@mui/material"
import { ProductCard } from "./ProductCard"
import { productsList } from "../utils/AppData"

export const ProductList = () => {
  return (
    <Container sx={{padding: "20px", display: 'flex', flexWrap: 'wrap', gap: 4}}>
      
      {productsList.map(product => (
        <ProductCard product={product}/>
      ))}
    </Container>
        
  )
}
