import React from 'react'

const Cart = () => {
  return (
    <div className="wrapper">
    <div className='cart-page-container p-8  w-[800px] '>
    <div className="cart-container justify-around bg-slate-50 rounded-lg shadow-xl p-8 w-full max-w-4xl ">
      <h1 > Your Cart</h1>
      <div className="cart-items flex items-start border-b-1 p-4 gap-4">
       <img src='' alt='Image-title' className='flex-0 w-25 object-contain'/>
       <div className="cart-item-details grow-1">
        <h2 className='font-bold text-lg text-gray-700 hover:text-[#2874f0]'>Product Title</h2>
        <p>Price: $99.99</p>
       
        <div className="">
          <input type='number' min='1' className='w-15 mr-1 p-1'/>
        <button className="update-button bg-[#DC5F00] text-amber-50 border-none px-2 p-1 rounded-sm cursor-pointer mr-1 ">+</button>
        <button className="remove-button bg-[#DC5F00] text-amber-50 border-none px-2 p-1 rounded-sm cursor-pointer mr-1">-</button>
       </div>
      </div>
      </div>
      {/* cart total */}
      <div className="cart-total text-right mr-1 text-xl font-semibold" >
     <p >Total : $200</p>
      </div>
     <div className="">
        {/* <button className="check-button bg-[#DC5F00] text-amber-50 border-none p-3  px-2 rounded-sm w-full">Checkout</button>
        <div> */}
        <button className="continue-button bg-[#DC5F00] text-amber-50 border-none p-3 px-2 rounded-sm w-full">Continue Shopping</button>
        </div>
        </div>
    </div>
    </div>
   
  )
}

export default Cart