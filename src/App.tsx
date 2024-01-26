import { useState } from 'react'
import AppHeader from './components/AppHeader'
import { ProductList } from './components/ProductList'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartList } from './components/CartList';
import { Product } from './utils/AppData';

function App() {

  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems([...cartItems, product])
    console.log(cartItems);
  }

  return (
    <BrowserRouter>
      <AppHeader/>
      <Routes>
        <Route index element={<ProductList onAddToCart={(product) => handleAddToCart(product)} />}/>
        <Route path='/cart' element={<CartList items={cartItems}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
