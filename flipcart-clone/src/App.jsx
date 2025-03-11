import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'

import { Component } from 'react'
//Components
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import ProductDetails from './Pages/ProductDetails/ProductDetails'


//App Component
export default function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>FlipCart Clone</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productdetails/:productId" element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  );
}
// function App() {


//   return (
//     <>
//         <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/productdetails/:productId" element={<ProductDetails />} />
//         </Routes>
//         </BrowserRouter>    
//     </>
//   )
// }

// export default App
