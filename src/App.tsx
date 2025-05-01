import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home/Home";
import { Checkout } from "./pages/Checkout/Checkout";
import { Product } from "./pages/Product/Product";
import { Layout } from "./layout/Layout";

function App() {
  return (
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
  );
}

export default App;
