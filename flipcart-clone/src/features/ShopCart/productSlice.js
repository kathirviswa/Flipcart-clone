import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
     status: 'idle',
    
  }
  const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    }})
      export default productsSlice.reducer;