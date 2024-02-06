import { Box, Button, Container, Typography } from "@mui/material"
import { CartItem } from "../components/CartItem"
import { useContext } from "react"
import { CartContext } from "../contexts/Cart.context"
import { NavLink } from "react-router-dom"

export const CartList = () => {

	const cartItems = useContext(CartContext);

	if(cartItems?.cartItems.length === 0){
		return (
			<Container>
				<Typography align="center" variant="h5" color='#bdbdbd' sx={{marginTop: '30%'}}>
					There is no items yet
				</Typography>
			</Container>
		)
	}

	return (
		<Container sx={{padding: "20px"}}>
			<h2>Total Price: ${cartItems?.totalPrice}</h2>
		
			{cartItems?.cartItems.map(item => (
				<Box marginTop={2} key={item.id}>
					<CartItem CartItem={item} />
				</Box>
			))}

			<NavLink to='/checkout'>
				<Button 
						variant="contained"
						sx={{marginTop: '10px', textTransform: 'none'}}
					>
						Order Now
				</Button>
			</NavLink>
		</Container>
	)
}
