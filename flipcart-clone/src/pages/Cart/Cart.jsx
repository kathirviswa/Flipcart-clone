import React from 'react'

const Cart = () => {
  return (
    <div className='cart-page-container p-8  w-[800px] '>
    <div className="cart-container  bg-slate-50 rounded-lg shadow-xl p-8 w-full max-w-4xl">
      <h1 > Your Cart</h1>
      <div className="cart-items flex items-start border-b-1 p-4 gap-4">
       <img src='' alt='Image-title' className=''/>
       <div className="cart-item-details">
        <h2>Product Title</h2>
        <p>Price: $99.99</p>
        <div className="">
          <input type='number' min='1'/>
        <button className="update-button">+</button>
        <button className="remove-button">-</button>
       </div>
      </div>
      </div>

      
      <div className="cart-total">
     <p>Total : $200</p>
      </div>
      <div className="cart-buttons">
        <button className="cart-button">Checkout</button>
        <button className="cart-button">Continue Shopping</button>
      </div>
      {/* <div className="cart-footer">
        <p>�� 2025 Flipkart.com</p>
      </div> */}
    </div>
    </div>
  )
}

export default Cart