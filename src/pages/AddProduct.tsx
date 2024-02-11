import { Button, Container, TextField } from "@mui/material";
import { IProduct } from "../utils/AppData";
import { ChangeEvent, Dispatch, useState } from "react";
import { BaseUrl } from "../App";
import { error } from "console";

let initialState = {
  name: "",
  image: "",
  price: 0,
  category: "",
  stock: 0,
};

interface Props {
  products: IProduct[];
  setProducts: Dispatch<React.SetStateAction<IProduct[] | any[]>>;
}
export const AddProduct = ({ products, setProducts }: Props) => {
  const [formData, setFormData] = useState<IProduct>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async () => {
    try {
      const response = await fetch(`${BaseUrl}/products/new`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Http error! Status: ${response.status}`);
      }

      const data = response.json();
      setProducts([...products, data]);
    } catch (err) {
      console.error("Error:", err);
    }
  };

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
        <Button variant="contained" color="primary" onClick={handleSubmitForm}>
          Submit
        </Button>
      </form>
    </Container>
  );
};
