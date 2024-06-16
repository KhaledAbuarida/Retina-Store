import AppHeader from "./components/AppHeader";
import { ProductList } from "./pages/ProductList";
import { CartList } from "./pages/CartList";
import { CartContextProvider } from "./contexts/Cart.context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import { useEffect, useState } from "react";
import { Checkout } from "./pages/Checkout";
import { getProducts } from "./api/productAPI";
import { getCartItems } from "./api/cart.api";
import { IProduct } from "./types/product";
import { ICartItem } from "./types/cart";
import ProductProvider from "./contexts/product/ProductProvider";

function App() {
  // States
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  // const cart = useContext(CartContext);

  useEffect(() => {
    // fetch products
    // const fetchProducts = async () => {
    //   const fetchedProducts = await getProducts();
    //   setProducts(fetchedProducts);
    // };

    // fetch cart items
    const fetchCartItems = async () => {
      const fetchedCartItems = await getCartItems();
      console.log(fetchedCartItems);
      setCartItems(fetchedCartItems);
    };

    // fetchProducts();
    fetchCartItems();
  }, []);

  return (
    <BrowserRouter>
      <ProductProvider>
        <CartContextProvider>
          <AppHeader cartItemsLength={cartItems.length} />
          <Routes>
            <Route index element={<ProductList />} />
            <Route
              path="/cart"
              element={
                <CartList cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
            <Route
              path="/add"
              element={
                <AddProduct products={products} setProducts={setProducts} />
              }
            />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </CartContextProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
