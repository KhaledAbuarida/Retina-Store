import { Button, Container, TextField } from "@mui/material"
import { IProduct } from "../utils/AppData"
import { ChangeEvent, useState } from "react"

interface Props {
	handleAddProduct: (product: IProduct) => void;
}
export const AddProduct = ({handleAddProduct}: Props) => {

	let initialState  = {
		id: new Date().getTime(),
		name: '',
		category: '',
		price: 0,
		stock: 0,
		image: '',
	}

	const [newProduct, setNewProduct] = useState<IProduct>(initialState )

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewProduct({...newProduct, [e.target.name]: e.target.value})
	};
	

	return (
		<Container>
			<form>
				<TextField
					label="Product Name"
					variant="outlined"
					type="text"
					fullWidth
					margin="normal"
					onChange={handleChange}
				/>
				<TextField
					label="Image"
					type="url"
					variant="outlined"
					fullWidth
					margin="normal"
					onChange={handleChange}
				/>
				<TextField
					label="Price"
					variant="outlined"
					fullWidth
					type="number"
					margin="normal"
					onChange={handleChange}
				/>
				<TextField
					label="Category"
					variant="outlined"
					fullWidth
					margin="normal"
					onChange={handleChange}
				/>
				<TextField
					label="Stock"
					variant="outlined"
					type="number"
					fullWidth
					margin="normal"
					onChange={handleChange}
				/>
				<Button
					variant="contained"
					color="primary"
					onClick={() => handleAddProduct(newProduct)}
				>
					Submit
				</Button>
    		</form>
		</Container>
	)
}
