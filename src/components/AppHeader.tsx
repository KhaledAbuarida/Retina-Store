import { AppBar, Container, Toolbar, Box, Badge, Button } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

interface Props {
  cartItemsLength: number;
}

const AppHeader = ({ cartItemsLength }: Props) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1D2B53" }}>
      <Container>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "#FFF",
              fontFamily: "monospace",
              fontSize: "28px",
              fontWeight: "bolder",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StorefrontIcon
              sx={{
                fontSize: "28px",
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            />
            Retina
          </NavLink>

          {/* NAV ITEMS */}
          <Box>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "#FFF",
                fontSize: "20px",
              }}
            >
              <Button sx={{ textTransform: "none", color: "inherit" }}>
                Products
              </Button>
            </NavLink>
            <NavLink
              to="/add"
              style={{
                textDecoration: "none",
                color: "#FFF",
                fontSize: "20px",
              }}
            >
              <Button sx={{ textTransform: "none", color: "inherit" }}>
                Add Product
              </Button>
            </NavLink>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NavLink to="/cart" style={{ color: "white", marginRight: "10px" }}>
              <Badge badgeContent={cartItemsLength} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppHeader;
