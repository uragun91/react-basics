import { Product } from "../types";
import { products } from "./products";

export function getCart(): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const val = Math.random();

      if (val > 0.5) {
        resolve(products.slice(0, 2));
      } else {
        reject();
      }
    }, 1500);
  });
}
