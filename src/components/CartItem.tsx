import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { ICartItem } from "../utils/AppData";
import { Grid, IconButton } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/Cart.context";
import { AspectRatio } from "@mui/joy";

interface Props {
  CartItem: ICartItem;
}

export const CartItem = ({ CartItem }: Props) => {
  const cartItems = useContext(CartContext);
  const [itemQuantity, setItemQuantity] = useState(CartItem.quantity);
  const [itemPrice, setItemPrice] = useState(itemQuantity * CartItem.price);

  const handleIncreaseItemQuantity = () => {
    if (itemQuantity < CartItem.stock) {
      // Increase itemQuantity first
      setItemQuantity((prevQuantity) => prevQuantity + 1);
      CartItem.quantity = itemQuantity + 1;
      cartItems?.handleTotalPrice(parseInt(CartItem.price));
      // Calculate the new itemPrice using the updated itemQuantity
      setItemPrice(CartItem.price * (itemQuantity + 1));
    }
  };

  const handleDecreaseItemQuantity = () => {
    if (itemQuantity > 1) {
      // Decrease itemQuantity first
      setItemQuantity((prevQuantity) => prevQuantity - 1);

      CartItem.quantity = itemQuantity - 1;

      cartItems?.handleTotalPrice(-CartItem.price);

      // Calculate the new itemPrice using the updated itemQuantity
      setItemPrice(CartItem.price * (itemQuantity - 1));
    }
    CartItem.quantity = itemQuantity;
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container>
          <Grid item xs={9}>
            <Typography variant="h5" component="div">
              <b>{CartItem.name}</b>
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {CartItem.category}
            </Typography>

            <Typography variant="h6">
              <b>${itemPrice}</b>
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <AspectRatio objectFit="contain">
              <img src={CartItem.image} loading="lazy" alt="" />
            </AspectRatio>
          </Grid>
        </Grid>
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
        <Button
          onClick={() => cartItems?.deleteCartItem(CartItem.id)}
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
