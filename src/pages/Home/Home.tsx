import { products } from "../../services/products";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Grid } from "@mui/material";
import { Product } from "../../types";

export function Home() {
  return (
    <>
      <Grid container spacing={2}>
        {products.map((pr: Product) => {
          return (
            <Grid key={pr.id} size={4}>
              <ProductCard product={pr} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
