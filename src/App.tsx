import AppHeader from "./components/AppHeader";
import { ProductList } from "./pages/ProductsPage";
import { CartList } from "./pages/CartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProductPage";
import { useEffect, useState } from "react";
import { Checkout } from "./pages/CheckoutPage";
import { getCartItems } from "./api/cartAPI";
import { IProduct } from "./types/product";
import { ICartItem } from "./types/cart";
import ProductProvider from "./contexts/product/ProductProvider";
import CartProvider from "./contexts/cart/CartProvider";
import LoginPage from "./pages/LoginPage";
import AuthProvider from "./contexts/Auth/AuthProvider";
import RegisterPage from "./pages/RegisterPage";

function App() {
  // States
  const [products, setProducts] = useState<IProduct[]>([]);
  // const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  // const cart = useContext(CartContext);

  useEffect(() => {
    // fetch products
    // const fetchProducts = async () => {
    //   const fetchedProducts = await getProducts();
    //   setProducts(fetchedProducts);
    // };
    // fetch cart items
    // const fetchCartItems = async () => {
    //   const fetchedCartItems = await getCartItems();
    //   console.log(fetchedCartItems);
    //   setCartItems(fetchedCartItems);
    // };
    // fetchProducts();
    // fetchCartItems();
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <AppHeader cartItemsLength={2} />
            <Routes>
              <Route index element={<ProductList />} />
              <Route path="/cart" element={<CartList />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
