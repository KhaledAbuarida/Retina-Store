import AppHeader from "./components/AppHeader";
import { ProductList } from "./pages/ProductList";
import { CartList } from "./pages/CartList";
import { CartContextProvider } from "./contexts/Cart.context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddProduct } from "./pages/AddProduct";
import { IProduct } from "./utils/AppData";
import { useEffect, useState } from "react";
import { Checkout } from "./pages/Checkout";

export const BaseUrl = "http://localhost:3001";

function App() {
  // States
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    const data = await fetch(`${BaseUrl}/products`).then((res) => res.json());
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, [products]);

  return (
    <BrowserRouter>
      <CartContextProvider>
        <AppHeader />
        <Routes>
          <Route index element={<ProductList productsList={products} />} />
          <Route path="/cart" element={<CartList />} />
          <Route
            path="/add"
            element={
              <AddProduct products={products} setProducts={setProducts} />
            }
          />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
