import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../types";

const cartSlice = createSlice({
  name: "cart-state",
  initialState: [] as Product[],
  reducers: {
    addProduct: function (state, action: PayloadAction<Product>) {
      state.push(action.payload);
    },
    removeProduct: function (state, action: PayloadAction<Product>) {
      const productIndex = state.findIndex(
        (p: Product) => p.id === action.payload.id
      );

      if (productIndex > -1) {
        state.splice(productIndex, 1);
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
