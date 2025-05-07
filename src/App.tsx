import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home/Home";
import { Checkout } from "./pages/Checkout/Checkout";
import { Product } from "./pages/Product/Product";
import { Layout } from "./layout/Layout";
// import { CartProvider } from "./providers/CartProvider";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route path="*" element={<div> Not found</div>} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
