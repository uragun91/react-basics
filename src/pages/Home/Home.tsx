import { products } from "../../services/products";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Grid } from "@mui/material";

export function Home() {
  return (
    <>
      <Grid container spacing={2}>
        {products.map((pr) => {
          return (
            <Grid size={4}>
              <ProductCard name={pr.name} imgSrc={pr.img} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
