import { Button, Container, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { addProductAPI } from "../api/productAPI";

const AddProduct = () => {
  const navigate = useNavigate();

  // form validation schema
  const validationSchema = yup.object().shape({
    name: yup.string().required("Product Name is Required"),
    image: yup.string().url().required("Please enter the image url"),
    price: yup
      .number()
      .typeError("Amount Must be Number")
      .integer()
      .positive()
      .required("Please enter the product price"),
    category: yup.string(),
    stock: yup
      .number()
      .typeError("Amount Must be Number")
      .integer()
      .positive()
      .required("Enter the product stock in the store"),
  });

  // useForm Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // handle form submission
  const onSubmit = async (data: any) => {
    try {
      const response = await addProductAPI(data);
      if (response.status === 201) {
        reset();
        navigate("/");
        // setProducts([...products, data]);
      } else {
        alert("error");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <Container sx={{ width: "40%" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Product Name"
          variant="outlined"
          type="text"
          fullWidth
          margin="normal"
          {...register("name")}
        />
        {errors.name && (
          <Typography variant="caption" color="red" display="block">
            {errors.name?.message}
          </Typography>
        )}

        <TextField
          label="Image"
          type="url"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("image")}
        />
        {errors.image && (
          <Typography variant="caption" color="red" display="block">
            {errors.image?.message}
          </Typography>
        )}

        <TextField
          label="Price"
          variant="outlined"
          fullWidth
          type="text"
          margin="normal"
          {...register("price")}
        />
        {errors.price && (
          <Typography variant="caption" color="red" display="block">
            {errors.price?.message}
          </Typography>
        )}

        <TextField
          label="Category"
          variant="outlined"
          fullWidth
          margin="normal"
          type="text"
          {...register("category")}
        />
        {errors.category && (
          <Typography variant="caption" color="red" display="block">
            {errors.category?.message}
          </Typography>
        )}

        <TextField
          label="Stock"
          variant="outlined"
          type="number"
          fullWidth
          margin="normal"
          {...register("stock")}
        />
        {errors.stock && (
          <Typography variant="caption" color="red" display="block">
            {errors.stock?.message}
          </Typography>
        )}

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddProduct;
