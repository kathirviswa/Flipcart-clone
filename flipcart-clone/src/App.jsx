import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

// Components
import Navbar from './Components/Navbar';

// Pages
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';
  // import your store here

 function App() {
  return (
    
  <div className="min-h-screen bg-white "> 
   
    <BrowserRouter> 
      <Navbar /> 
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productdetails/:productId" element={<ProductDetails />} />
        </Routes>
    
    </BrowserRouter>
    </div>
  
  );
}
export default App;
