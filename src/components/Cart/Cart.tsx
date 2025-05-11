import { Box } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";

import { fetchUserCart } from "../../store/slices/cartSlice";
import { useEffect } from "react";
import { Loading } from "../Loading/Loading";
import { CartProductList } from "../CartProductList/CartProdcutList";

export function Cart() {
  const cart = useSelector((state: RootState) => state.cart.asyncCart);
  const isLoadingCart = useSelector(
    (state: RootState) => state.cart.isLoadingCart
  );
  const isCartLoadingError = useSelector(
    (state: RootState) => state.cart.isCartFetchError
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUserCart());
  }, []);

  return (
    <>
      {Boolean(isLoadingCart) && <Loading />}

      {Boolean(!isLoadingCart && isCartLoadingError) && <Box>Error!</Box>}

      {Boolean(!isLoadingCart && !isCartLoadingError) && (
        <CartProductList cart={cart} />
      )}
    </>
  );
}
