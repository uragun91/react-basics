import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useCart } from "../../providers/CartProvider";

export function Cart() {
  const { cart } = useCart();

  if (!cart.length) {
    return <Typography variant="h5">Your cart is empty</Typography>;
  }

  return (
    <List>
      {cart.map((pr) => {
        return (
          <ListItem key={pr.id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={pr.img} />
            </ListItemAvatar>
            <ListItemText primary={pr.name} />
          </ListItem>
        );
      })}
    </List>
  );
}
