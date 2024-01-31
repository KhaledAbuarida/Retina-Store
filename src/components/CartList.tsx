import { Box, Container } from "@mui/material"
import { CartItem } from "./CartItem"
import { useContext } from "react"
import { CartContext } from "../contexts/Cart.context"

export const CartList = () => {

  const cartItems = useContext(CartContext);

  return (
    <Container>
        {cartItems?.cartItems.map(item => (
          <Box margin={2}>
            <CartItem key={item.id} CartItem={item} />
          </Box>
        ))}
    </Container>
  )
}
