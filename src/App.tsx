import AppHeader from "./components/AppHeader";
import { ProductList } from "./pages/ProductList";
import { CartList } from "./pages/CartList";
import { CartContextProvider } from "./contexts/Cart.context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddProduct } from "./pages/AddProduct";
import { IProduct, productsList } from "./utils/AppData";
import { useState } from "react";
import { Checkout } from "./pages/Checkout";

function App() {
  // States
  const [products, setProducts] = useState<IProduct[]>(productsList);

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
