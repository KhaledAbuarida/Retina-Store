import { Box, Container } from "@mui/material"
import { CartItem } from "./CartItem"
import { useContext } from "react"
import { CartContext } from "../contexts/Cart.context"

export const CartList = () => {

	const cartItems = useContext(CartContext);

	return (
		<Container>
			<h2 style={{margin: '20px'}}>Total Price: ${cartItems?.totalPrice}</h2>
			{cartItems?.cartItems.map(item => (
				<Box margin={2} key={item.id}>
					<CartItem CartItem={item} />
				</Box>
			))}
		</Container>
	)
}
