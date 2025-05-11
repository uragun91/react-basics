import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../types";
import { getCart } from "../../../services/cart";

const initialState = {
  syncCart: [],
  asyncCart: [],
  isLoadingCart: false,
  isCartFetchError: false,
} as {
  syncCart: Product[];
  asyncCart: Product[];
  isLoadingCart: boolean;
  isCartFetchError: boolean;
};

export const fetchUserCart = createAsyncThunk(
  "cart/fetchUserCart",
  async (thunkApi) => {
    return await getCart();
  }
);

const cartSlice = createSlice({
  name: "cart-state",
  initialState,
  reducers: {
    addProduct: function (state, action: PayloadAction<Product>) {
      state.syncCart.push(action.payload);
    },
    removeProduct: function (state, action: PayloadAction<Product>) {
      const productIndex = state.syncCart.findIndex(
        (p: Product) => p.id === action.payload.id
      );

      if (productIndex > -1) {
        state.syncCart.splice(productIndex, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserCart.pending, (state) => {
      state.isCartFetchError = false;
      state.isLoadingCart = true;
    });
    builder.addCase(
      fetchUserCart.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.isLoadingCart = false;
        state.asyncCart = action.payload;
      }
    );
    builder.addCase(fetchUserCart.rejected, (state) => {
      state.isLoadingCart = false;
      state.isCartFetchError = true;
    });
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
