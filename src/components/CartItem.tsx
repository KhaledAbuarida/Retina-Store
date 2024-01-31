import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { ICartItem } from '../utils/AppData';
import { IconButton } from '@mui/material';
import { useContext, useState } from 'react';
import { CartContext } from '../contexts/Cart.context';

interface Props {
	CartItem: ICartItem
}

export const CartItem = ({CartItem}: Props) => {

	const cartItems = useContext(CartContext);
	const [itemQuantity, setItemQuantity] = useState(CartItem.quantity);
	const [itemPrice, setItemPrice] = useState(itemQuantity * CartItem.price);

	const handleIncreaseItemQuantity = () => {
		if (itemQuantity < CartItem.stock) {
		  	// Increase itemQuantity first
			setItemQuantity((prevQuantity) => prevQuantity + 1);
			CartItem.quantity = itemQuantity + 1;
			cartItems?.handleTotalPrice(CartItem.price);
		  	// Calculate the new itemPrice using the updated itemQuantity
		  	setItemPrice(CartItem.price * (itemQuantity + 1));
		}
	};

	const handleDecreaseItemQuantity = () => {
		if (itemQuantity > 1) {
			// Decrease itemQuantity first
			setItemQuantity((prevQuantity) => prevQuantity - 1);

			CartItem.quantity = itemQuantity - 1;

			cartItems?.handleTotalPrice(CartItem.price);

			// Calculate the new itemPrice using the updated itemQuantity
			setItemPrice(CartItem.price * (itemQuantity - 1));
		}
		CartItem.quantity = itemQuantity;
	};
	  
	return (
		<Card sx={{ minWidth: 275, backgroundColor: '#e5e5e5' }}>
			<CardContent>
				<div>
					<Typography variant="h5" component="div">
						{CartItem.name}
					</Typography>
	
					<Typography sx={{ mb: 1.5 }} color="text.secondary">
						{CartItem.category}
					</Typography>
				</div>

				<Typography variant='h6'>
						<b>${itemPrice}</b>
				</Typography>

			</CardContent>
			<CardActions>
				{/* Increase Item Quantity */}
				<IconButton onClick={() => handleIncreaseItemQuantity()}>
					<b> + </b>
				</IconButton>
				{itemQuantity}

				<IconButton onClick={() => handleDecreaseItemQuantity()}>
					<b> - </b>
				</IconButton>
				<Button onClick={() =>cartItems?.deleteCartItem(CartItem.id)} variant="outlined" color='error' startIcon={<DeleteIcon />}>
						Delete
				</Button>
			</CardActions>
		</Card>
	)
}
