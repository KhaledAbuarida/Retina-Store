import { Box, Button, Container, Typography } from "@mui/material";
import { CartItem } from "../components/CartItem";
import { NavLink } from "react-router-dom";
import { ICartItem } from "../utils/AppData";

interface Props {
  cartItems: ICartItem[];
}

export const CartList = ({ cartItems }: Props) => {
  if (cartItems.length === 0) {
    return (
      <Container>
        <Typography
          align="center"
          variant="h5"
          color="#bdbdbd"
          sx={{ marginTop: "30%" }}
        >
          There is no items yet
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ padding: "20px" }}>
      {/* <h2>Total Price: ${cartItems}</h2> */}

      {cartItems.map((item) => (
        <Box marginTop={2} key={item.productId}>
          <CartItem CartItem={item} />
        </Box>
      ))}

      <NavLink to="/checkout">
        <Button
          variant="contained"
          sx={{ marginTop: "10px", textTransform: "none" }}
        >
          Order Now
        </Button>
      </NavLink>
    </Container>
  );
};
