import React, { useEffect, useState } from 'react'

const Products = () => {
const [Products, setProducts]= useState([])
useEffect (() => {
  const fetchProducts =async() =>{
  const response = await fetch('https://api.escuelajs.co/api/v1/products')
  const data = await response.json();
   setProducts(data);
    // console.log(data);
}
fetchProducts();
},[])


  return (
    <>
  <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Example Product Cards */}
       
           {Products.map(Products=>(
            <div  className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-gray-100 rounded-lg mb-4">
              <img src= {Products.image} alt="Product" className="w-full h-full object-contain rounded-lg" />
            </div>

            <h3 className="font-medium text-gray-800">{Products.title}</h3>
             <p className="text-sm text-gray-600">{Products.category}</p> 
            <div className="mt-2 flex items-center justify-between">
           <span className="font-bold text-gray-800">${Products.price}</span>
              <span className="text-green-700 text-sm">40% off</span>
  
              <button className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg">Add to Cart</button>
            </div>
          </div>
           ))} 
       
        </div>
      </main>
    
    </>
  )
}
export default Products