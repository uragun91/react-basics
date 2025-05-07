import {
  AppBar,
  Badge,
  Container,
  IconButton,
  Popover,
  Toolbar,
  Typography,
} from "@mui/material";
import { Outlet } from "react-router";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { Cart } from "../components/Cart/Cart";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export function Layout() {
  // const cartContext = useCart();
  const cart = useSelector((state: RootState) => state.cart);

  const [cartAnchorEl, setCartAnchorEl] = useState<HTMLButtonElement | null>(
    null
  );

  const handleCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCartAnchorEl(event.currentTarget);
  };

  const handleCartClose = () => {
    setCartAnchorEl(null);
  };

  const open = Boolean(cartAnchorEl);
  const id = open ? "cart-popover" : undefined;

  return (
    <Container fixed>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Apple Store
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleCartClick}
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={cartAnchorEl}
            onClose={handleCartClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Cart />
          </Popover>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Container>
  );
}
