import AppHeader from "./components/AppHeader";
import { ProductList } from "./pages/ProductList";
import { CartList } from "./pages/CartList";
import { CartContextProvider } from "./contexts/Cart.context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import { ICartItem, IProduct } from "./utils/AppData";
import { useEffect, useState } from "react";
import { Checkout } from "./pages/Checkout";
import { getProducts } from "./api/product.api";
import { getCartItems } from "./api/cart.api";

export const BaseUrl = "http://localhost:3001";

function App() {
  // States
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  // const cart = useContext(CartContext);

  useEffect(() => {
    // fetch products
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      console.log(fetchedProducts);
      setProducts(fetchedProducts);
    };

    // fetch cart items
    const fetchCartItems = async () => {
      const fetchedCartItems = await getCartItems();
      console.log(fetchedCartItems);
      setCartItems(fetchedCartItems);
    };

    fetchProducts();
    fetchCartItems();
  }, []);

  return (
    <BrowserRouter>
      <CartContextProvider>
        <AppHeader cartItemsLength={cartItems.length} />
        <Routes>
          <Route index element={<ProductList productsList={products} />} />
          <Route path="/cart" element={<CartList cartItems={cartItems} />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
