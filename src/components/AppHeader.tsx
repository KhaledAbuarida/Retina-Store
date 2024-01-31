import { AppBar, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button, Badge } from "@mui/material";
import {useContext, useState} from "react";
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import { CartContext } from "../contexts/Cart.context";


const pages = ['Products', 'Pricing'];

const AppHeader = () => {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const cartItems = useContext(CartContext)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    
    return (
    <AppBar position="static" sx={{ backgroundColor: "#1D2B53"}}>
      <Container>
        <Toolbar disableGutters>
            <StorefrontIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <NavLink 
                to='/' 
                style={{
                    textDecoration: 'none', 
                    color: '#fff', 
                    fontFamily: 'monospace', 
                    fontSize: '24px'
                }}
            >
                Retina
            </NavLink>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                <MenuIcon />
                    </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center" >{page}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
           
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'monospace'}}
                >
                    {page}
                </Button>
                ))}
            </Box>

            <NavLink to='/cart' style={{color: 'white', marginRight: '20px'}}>
            <Badge badgeContent={cartItems?.cartItems.length} color="primary">
                <ShoppingCartIcon/>
            </Badge>
            </NavLink>
           

            <p> User Name </p>

          
        </Toolbar>
      </Container>
    </AppBar>
    );
}

export default AppHeader