import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useCart } from "../../providers/CartProvider";
import { Product } from "../../types";

export function ProductCard({ product }: { product: Product }) {
  const { cart, add } = useCart();

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
            add(product);
          }}
        >
          + Add
        </Button>
      </CardActions>
    </Card>
  );
}
