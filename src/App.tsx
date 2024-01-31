import AppHeader from './components/AppHeader'
import { ProductList } from './components/ProductList'
import { CartList } from './components/CartList';
import { CartContextProvider } from './contexts/Cart.context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  


  return (
    <BrowserRouter>
      <CartContextProvider>
        <AppHeader/>
        <Routes>
          <Route index element={<ProductList />}/>
          <Route path='/cart' element={<CartList />}/>
        </Routes>
      </CartContextProvider>  
    </BrowserRouter>
  )
}

export default App
