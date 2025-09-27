import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
   cartItem:[],
  }, 
  reducers: {
    addTocart: (state, action) => {
     // state.value = action.payload       // initial value 0 but value update by payload        
     //  console.log(action.payload);       // update value is product details
     let findProduct = state.cartItem.find((item)=>item.id == action.payload.id)
     if(findProduct){
      state.cartItem[findProduct].quantity += 1
      console.log("if");
      
     }else{
      // state.cartItem = [...state.cartItem, action.payload]
      console.log(action.payload);
      
     } 
    }
  
  },
})


export const {addTocart} = productSlice.actions

export default productSlice.reducer