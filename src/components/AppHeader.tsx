import { AppBar, Container, Toolbar, Box, Badge, Button } from "@mui/material";
import {useContext} from "react";
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";
import { CartContext } from "../contexts/Cart.context";

const AppHeader = () => {

    const cartItems = useContext(CartContext)

    
    return (
    <AppBar position="static" sx={{ backgroundColor: "#1D2B53"}}>
      <Container>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <NavLink 
                to='/' 
                style={{
                    textDecoration: 'none', 
                    color: '#FFF', 
                    fontFamily: 'monospace', 
                    fontSize: '28px',
                    fontWeight: 'bolder',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <StorefrontIcon sx={{ fontSize: '28px', display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                Retina
            </NavLink>

           {/* NAV ITEMS */}
            <Box>
                <NavLink
                    to='/'
                    style={{
                        textDecoration: 'none',
                        color: '#FFF',
                        fontSize: '20px',
                    }}
                >
                    <Button sx={{ textTransform: 'none', color: 'inherit'}}>
                        Products
                    </Button>
                </NavLink>
                <NavLink
                    to='/'
                    style={{
                        textDecoration: 'none',
                        color: '#FFF',
                        fontSize: '20px',
                    }}
                >
                    <Button sx={{ textTransform: 'none', color: 'inherit'}}>
                        Add Product
                    </Button>
                </NavLink>
                
            </Box>

            <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <NavLink to='/cart' style={{color: 'white', marginRight: '10px'}}>
                    <Badge badgeContent={cartItems?.cartItems.length} color="primary">
                        <ShoppingCartIcon/>
                    </Badge>
                </NavLink>
                <p> User Name </p>
            </Box>
           
            

          
        </Toolbar>
      </Container>
    </AppBar>
    );
}

export default AppHeader