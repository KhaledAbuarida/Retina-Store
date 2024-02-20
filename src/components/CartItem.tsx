import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { ICartItem } from "../utils/AppData";
import { Grid, IconButton } from "@mui/material";
import { useState } from "react";
import { AspectRatio } from "@mui/joy";
import { deleteCartItem } from "../api/cart.api";

interface Props {
  CartItem: ICartItem;
}

export const CartItem = ({ CartItem }: Props) => {
  const [itemQuantity, setItemQuantity] = useState(CartItem.quantity);
  const [itemPrice, setItemPrice] = useState(itemQuantity * CartItem.unitPrice);

  // const handleIncreaseItemQuantity = () => {
  //   if (itemQuantity < CartItem.stock) {
  //     // Increase itemQuantity first
  //     setItemQuantity((prevQuantity) => prevQuantity + 1);
  //     CartItem.quantity = itemQuantity + 1;
  //     cartItems?.handleTotalPrice(CartItem.price);
  //     // Calculate the new itemPrice using the updated itemQuantity
  //     setItemPrice(CartItem.price * (itemQuantity + 1));
  //   }
  // };

  // const handleDecreaseItemQuantity = () => {
  //   if (itemQuantity > 1) {
  //     // Decrease itemQuantity first
  //     setItemQuantity((prevQuantity) => prevQuantity - 1);

  //     CartItem.quantity = itemQuantity - 1;

  //     cartItems?.handleTotalPrice(-CartItem.price);

  //     // Calculate the new itemPrice using the updated itemQuantity
  //     setItemPrice(CartItem.price * (itemQuantity - 1));
  //   }
  //   CartItem.quantity = itemQuantity;
  // };

  // handle delete cart item
  const handleDeleteCartItem = async (productId: string) => {
    await deleteCartItem(productId);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container>
          <Grid item xs={9}>
            <Typography variant="h5" component="div">
              <b>{CartItem.productName}</b>
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {/* {CartItem.category} */}
            </Typography>

            <Typography variant="h6">
              <b>${itemPrice}</b>
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <AspectRatio objectFit="contain">
              <img src={CartItem.imageUrl} loading="lazy" alt="" />
            </AspectRatio>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        {/* Increase Item Quantity */}
        <IconButton>
          <b> + </b>
        </IconButton>
        {itemQuantity}

        <IconButton>
          <b> - </b>
        </IconButton>
        <Button
          onClick={() => handleDeleteCartItem(CartItem.productId)}
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
