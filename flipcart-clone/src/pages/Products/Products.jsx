import React from 'react'

const Products = () => {
  return (
    <>
  <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Example Product Cards */}
       
            <div  className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4">
                <img src="" alt="Product" className="w-full h-full object-cover rounded-lg" />
              </div>

              <h3 className="font-medium text-gray-800">Product Name</h3>
              <p className="text-sm text-gray-500">Category</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-bold text-gray-800">₹499</span>
                <span className="text-green-700 text-sm">40% off</span>
    
                <button className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg">Add to Cart</button>
              </div>
            </div>
       
        </div>
      </main>
    
    </>
  )
}
export default Products