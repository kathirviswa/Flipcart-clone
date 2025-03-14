import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/ShopCart/productSlice';
import cartReducer from '../features/ShopCart/CartSlice';

export const store = configureStore({
    reducer: {
       
        products: productReducer,
         cart: cartReducer,
    },
})