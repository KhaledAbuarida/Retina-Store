import AppHeader from './components/AppHeader'
import { ProductList } from './components/ProductList'
import { CartList } from './components/CartList';
import { CartContextProvider } from './contexts/cart.context';

function App() {

  


  return (
    <CartContextProvider>
      <AppHeader/>
      <ProductList />
      <CartList />
    </CartContextProvider>
  )
}

export default App
