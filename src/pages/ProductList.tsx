import { Container } from "@mui/material"
import { ProductCard } from "../components/ProductCard"
import { IProduct } from "../utils/AppData"

interface Props {
  productsList: IProduct[]
}

export const ProductList = ({productsList}: Props) => {
  return (
    <Container sx={{ paddingTop: '20px', display: 'flex', flexWrap: 'wrap', gap: 4}}>
      
      {productsList.map(product => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </Container>
        
  )
}
