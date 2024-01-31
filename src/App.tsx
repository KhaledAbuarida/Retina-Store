import AppHeader from './components/AppHeader'
import { ProductList } from './components/ProductList'
import { CartList } from './components/CartList';
import { CartContextProvider } from './contexts/Cart.context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddProduct } from './components/AddProduct';
import { IProduct } from './utils/AppData';

function App() {

	const handleAddProduct = (product: IProduct) => {
		console.log(product);
	}


	return (
		<BrowserRouter>
			<CartContextProvider>
				<AppHeader/>
				<Routes>
					<Route index element={<ProductList />}/>
					<Route path='/cart' element={<CartList />}/>
					<Route path='/add' element={<AddProduct handleAddProduct={(product) => handleAddProduct(product)} />}/>
				</Routes>
			</CartContextProvider>  
		</BrowserRouter>
	)
}

export default App
