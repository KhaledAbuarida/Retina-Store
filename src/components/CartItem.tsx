import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, IconButton } from "@mui/material";
import { AspectRatio } from "@mui/joy";
import { ICartItem } from "../types/cartTypes";
import { IProduct } from "../types/productTypes";

interface Props {
  cartItem: ICartItem;
}

export const CartItem = ({ cartItem }: Props) => {
  const { name, price, image, category } = cartItem.productId;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container>
          <Grid item xs={9}>
            <Typography variant="h5" component="div">
              <b>{name}</b>
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {category}
            </Typography>

            <Typography variant="h6">
              <b>${price}</b>
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <AspectRatio objectFit="contain">
              <img src={image} loading="lazy" alt="" />
            </AspectRatio>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <IconButton>
          <b> + </b>
        </IconButton>
        {cartItem.quantity}

        <IconButton>
          <b> - </b>
        </IconButton>

        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
