import { Button, Container, TextField } from "@mui/material"
import { IProduct } from "../utils/AppData"
import { ChangeEvent, Dispatch, useState } from "react"

interface Props {
	products: IProduct[];
	setProducts: Dispatch<React.SetStateAction<IProduct[]>>;
}
export const AddProduct = ({products, setProducts}: Props) => {

	let initialState  = {
		id: new Date().getTime(),
		name: '',
		category: '',
		price: 0,
		stock: 0,
		image: '',
	}

	const [formData, setFormData] = useState<IProduct>(initialState )

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({...formData, [e.target.name]: e.target.value})
	};
	
	const handleSubmitForm = () => {
		setProducts([...products, formData]);
		setFormData(initialState);
	}

	return (
		<Container>
			<form>
				<TextField
					label="Product Name"
					name="name"
					variant="outlined"
					type="text"
					fullWidth
					margin="normal"
					value={formData.name}
					onChange={handleChange}
				/>
				<TextField
					label="Image"
					name="image"
					type="url"
					variant="outlined"
					fullWidth
					margin="normal"
					value={formData.image}
					onChange={handleChange}
				/>
				<TextField
					label="Price"
					name="price"
					variant="outlined"
					fullWidth
					type="number"
					margin="normal"
					value={formData.price}
					onChange={handleChange}
				/>
				<TextField
					label="Category"
					name="category"
					variant="outlined"
					fullWidth
					margin="normal"
					value={formData.category}
					onChange={handleChange}
				/>
				<TextField
					label="Stock"
					name="stock"
					variant="outlined"
					type="number"
					fullWidth
					margin="normal"
					value={formData.stock}
					onChange={handleChange}
				/>
				<Button
					variant="contained"
					color="primary"
					onClick={handleSubmitForm}
				>
					Submit
				</Button>
    		</form>
		</Container>
	)
}
