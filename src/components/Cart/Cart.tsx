import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { Product } from "../../types";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeProduct } from "../../store/slices/cartSlice";

export function Cart() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  if (!cart.length) {
    return <Typography variant="h5">Your cart is empty</Typography>;
  }

  return (
    <List>
      {cart.map((pr: Product) => {
        return (
          <ListItem
            key={pr.id}
            alignItems="flex-start"
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => {
                  dispatch(removeProduct(pr));
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={pr.img} />
            </ListItemAvatar>
            <ListItemText primary={pr.name} />
            <ListItemButton></ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
