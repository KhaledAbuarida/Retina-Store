import { Box, Button, Container, Typography } from "@mui/material";
import { CartItem } from "../components/CartItem";
import { NavLink } from "react-router-dom";
import { useCart } from "../contexts/cart/CartContext";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import { ICartItem } from "../types/cartTypes";

export const CartList = () => {
  // contexts
  const { cartItems, totalAmount, clearCart } = useCart();

  // handlers
  const handleClearCart = () => {
    clearCart();
  };

  // when cart is empty
  if (cartItems.length === 0) {
    return (
      <Container
        sx={{
          height: "calc(100vh - 100px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box>
          <NotInterestedIcon sx={{ fontSize: "120px", color: "#bdbdbd" }} />
        </Box>
        <Typography align="center" variant="h4" color="#bdbdbd">
          There is no items yet
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ padding: "20px" }}>
      <h2>Total Price: $ {totalAmount}</h2>

      <Button
        sx={{}}
        color="error"
        variant="contained"
        onClick={handleClearCart}
      >
        {" "}
        Clear Cart{" "}
      </Button>

      {cartItems.map((item: ICartItem) => (
        <Box marginTop={2} key={item._id}>
          <CartItem cartItem={item} />
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
