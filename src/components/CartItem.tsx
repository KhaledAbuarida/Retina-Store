import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { ICartItem } from "../utils/AppData";
import { Alert, Grid, IconButton } from "@mui/material";
import { useState } from "react";
import { AspectRatio } from "@mui/joy";
import { deleteCartItem, updateCartItemQuantity } from "../api/cart.api";

interface Props {
  cartItem: ICartItem | any;
  cartItems: ICartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<ICartItem[]>>;
}

export const CartItem = ({ cartItem, cartItems, setCartItems }: Props) => {
  const { _id, stock, name, price, image } = cartItem.product;

  const [itemQuantity, setItemQuantity] = useState(cartItem.quantity);
  const [itemPrice, setItemPrice] = useState(itemQuantity * cartItem.unitPrice);
  const [error, setError] = useState<string>("");

  // handle delete cart item
  const handleDeleteCartItem = async () => {
    setCartItems(cartItems.filter((item: any) => item.product._id !== _id));
    await deleteCartItem(_id);
  };

  // Function to increment item quantity
  const incrementQuantity = () => {
    let newQuantity;
    if (itemQuantity < stock) {
      newQuantity = itemQuantity + 1;
      setItemQuantity(newQuantity);
    } else {
      setError("Insufficient Product Stock");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
    // setItemPrice(newQuantity * cartItem.unitPrice);
    updateCartItemQuantity(_id, newQuantity);
  };

  // Function to decrement item quantity
  const decrementQuantity = () => {
    if (itemQuantity > 1) {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      // setItemPrice(newQuantity * cartItem.unitPrice);
      updateCartItemQuantity(_id, newQuantity);
    }
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container>
          <Grid
            item
            xs={9}
          >
            <Typography
              variant="h5"
              component="div"
            >
              <b>{name}</b>
            </Typography>

            <Typography
              sx={{ mb: 1.5 }}
              color="text.secondary"
            >
              {/* {CartItem.category} */}
            </Typography>

            <Typography variant="h6">
              {/* TODO: HANDLE ITEM PRICE WITH QUANTITY */}
              <b>${price}</b>
            </Typography>
          </Grid>

          <Grid
            item
            xs={3}
          >
            <AspectRatio objectFit="contain">
              <img
                src={image}
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        {/* Increase Item Quantity */}
        <IconButton onClick={incrementQuantity}>
          <b> + </b>
        </IconButton>
        {itemQuantity}

        {/* Decrease Item Quantity */}
        <IconButton onClick={decrementQuantity}>
          <b> - </b>
        </IconButton>

        <Button
          onClick={() => handleDeleteCartItem()}
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </CardActions>
      {error && <Alert severity="error">{error}</Alert>}
    </Card>
  );
};
