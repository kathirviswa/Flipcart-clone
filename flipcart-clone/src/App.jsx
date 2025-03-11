import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './Components/Navbar';

// Pages
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';

export default function App() {
  return (
    <BrowserRouter> {/* Wrap the entire app */}
      <div className="App">
        <header className="App-header">
          <h1>FlipCart Clone</h1>
          <Navbar /> {/* Navbar inside BrowserRouter */}
        </header>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productdetails/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
