import { Container } from "@mui/material"
import { Product } from "../utils/AppData"
import { CartItem } from "./CartItem"

interface Props {
    items: Product[]
}

export const CartList = ({items}: Props) => {
  return (
    <Container>
        hello its work
        {items.map(item => (
            <CartItem CartItem={item} />
        ))}
    </Container>
  )
}
