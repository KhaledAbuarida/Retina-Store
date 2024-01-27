import { Container } from "@mui/material"
import { CartItem } from "./CartItem"
import { useContext } from "react"
import { CartContext } from "../contexts/cart.context"

export const CartList = () => {

  const cartItems = useContext(CartContext);

  return (
    <Container>
        hello its work
        {cartItems?.cartItems.map(item => (
            <CartItem key={item.id} CartItem={item} />
        ))}
    </Container>
  )
}
