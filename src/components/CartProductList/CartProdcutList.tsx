import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Product } from "../../types";

import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/slices/cartSlice";

export function CartProductList({ cart }: { cart: Product[] }) {
  const dispatch = useDispatch();

  return (
    <>
      {Boolean(!cart.length) && <Box> Cart is empty </Box>}

      {Boolean(cart.length) && (
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
      )}
    </>
  );
}
