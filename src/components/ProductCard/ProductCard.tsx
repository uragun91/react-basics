import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Product } from "../../types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addProduct } from "../../store/slices/cartSlice";

export function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={<Typography variant="h4">{product.name}</Typography>}
      />
      <CardMedia
        component="img"
        height="280"
        image={product.img}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          This impressive pella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            dispatch(addProduct(product));
          }}
        >
          + Add
        </Button>
      </CardActions>
    </Card>
  );
}
