import React, { useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchProducts } from '../../features/ShopCart/productSlice';
import { addToCart } from '../../features/ShopCart/CartSlice';

// importing the fetchProducts action from the productsSlice.js file.
const Products = () => {
 
// const [Products, setProducts]= useState([]);
//distructing the products and status.
// useSelector((state)=>console.log(state.products));
const {products:Products, status}=useSelector((state)=>state.products);
const dispatch = useDispatch();

useEffect (() => {
  if(status ==='idle'){
    dispatch(fetchProducts());
  }
  // In this Entire ,logic  use an ProductsSlice Reduxtoolkit.
  
// const fetchProducts =async() =>{
//   const response = await fetch ('https://fakestoreapi.com/products');
//   const data = await response.json();
//    setProducts(data);
//      console.log(data);
// }
// fetchProducts();
// This is an example of how to fetch products from a fake API.
 // You can replace it with your actual API call.
 // Note: In a real-world application, you would fetch data from your backend API.
 // You would also handle any errors that may occur during the fetch request.  
 
},[status])

if (status==='loading') return <p className='text-center p-20 '>Loading products..</p>
if (status==='failed') return <p>Failed to Loading products. please try again</p>

  return (
    <>
  <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Example Product Cards */}
       
           {Products.map(Products=>(
            <div key={Products.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-gray-100 rounded-lg mb-4">
              <img src= {Products.image} alt={Products.title} className="w-full h-full object-contain rounded-lg" />
       
            </div>

      <h3 className="font-medium text-gray-800">{Products.title.length>20?`${Products.title.slice(0,20)}...`: Products.title}</h3>
        <p className="text-sm text-gray-600">{Products.category}</p> 
      <div className="mt-2 flex items-center justify-between">
         <span className="font-bold text-gray-800">${Products.price}</span>
              <span className="text-green-700 text-sm">40% off</span>
  
         <button onClick={()=>dispatch(addToCart(Products))} 
          className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg">
              Add to Cart
          </button>
            </div>
          </div>
           ))} 
       
        </div>
      </main>
    
    </>
  )
}
export default Products