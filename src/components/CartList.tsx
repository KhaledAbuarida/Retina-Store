import { Box, Container } from "@mui/material"
import { CartItem } from "./CartItem"
import { useContext } from "react"
import { CartContext } from "../contexts/Cart.context"

export const CartList = () => {

	const cartItems = useContext(CartContext);

	return (
		<Container sx={{padding: "20px"}}>
			<h2>Total Price: ${cartItems?.totalPrice}</h2>
			{cartItems?.cartItems.map(item => (
				<Box marginTop={2} key={item.id}>
					<CartItem CartItem={item} />
				</Box>
			))}
		</Container>
	)
}
