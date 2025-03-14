import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
 import { removeItemFromCart } from '../../features/ShopCart/CartSlice';

const Cart = () => {
 
 const {items:cartItems,tempItems,totalPrice} = useSelector(state=>state.cart)
 useSelector(state=>console.log(state))
 const dispatch = useDispatch()
 const navigate = useNavigate();
//cartItems remove functionality
 const handleRemoveItem = (id) => {
   dispatch(removeItemFromCart(id))
 }

  return (
    <div className="wrapper">
    <div className='cart-page-container p-8  w-[800px] '>
    <div className="cart-container justify-around bg-slate-50 rounded-lg shadow-xl p-8 w-full max-w-4xl ">
      <h1 className=' font-bold text-xl'> Your Cart</h1>
      
      {cartItems.map((item)=>(
        <div key={item.id} className="cart-items flex items-start border-b-1 p-4 gap-4">
       <img src={item.image} alt={item.title} className='flex-0 w-25 object-contain'/>
       <div className="cart-item-details grow-1">
        <h2 className='font-bold text-lg text-gray-700 hover:text-[#2874f0]'>{item.title}</h2>
        <p>Price: $ {item.price}</p>
       
        <div className="">
          <input type='number' min='1' className='w-15 mr-1 p-1'/>
        <button 
        className="update-button bg-[#DC5F00] text-amber-50 border-none px-2 p-1 rounded-sm cursor-pointer mr-1 ">+</button>
        <button onClick={()=>handleRemoveItem(item.id)}
        className="remove-button bg-[#DC5F00] text-amber-50 border-none px-2 p-1 rounded-sm cursor-pointer mr-1">-</button>
       </div>
      </div>
      </div>
      ))}

      {/* cart total */}
      <div className="cart-total text-right mr-1 text-xl font-semibold" >
     <p >Total : $ {totalPrice}</p>
      </div>
     <div className="">
        {/* <button className="check-button bg-[#DC5F00] text-amber-50 border-none p-3  px-2 rounded-sm w-full">Checkout</button>
        <div> */}
        <button onClick={() =>navigate("/")}
        className="continue-button bg-[#DC5F00] text-amber-50 border-none p-3 px-2 rounded-sm w-full">Continue Shopping</button>
        </div>
        </div>
    </div>
    </div>
   
  )
}

export default Cart