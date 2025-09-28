import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
  // value:0,
  // for new contiono
  cartItem : []
  }, 
  reducers: {
    addTocart: (state,action) => {
    // let findProduct = state.cartItem.findIndex((item)=>item.id == action.payload.id) 
      // console.log(action);  we will find payload 
     // console.log(action.payload);  // we will find value of initialState
   // if i want to take that value in initialState 
    //  state.value = action.payload   // payload value is going to initialState   for this we can see in Reduc-Chrome
                                      // payload value is 10 because i asign in productdetails handleCart function 
    //   console.log(action.payload);  // we send a new item in api as qun
 // we use condition for add qun like if similar than work one and if not then other work
 let findProduct = state.cartItem.findIndex((item)=>
  item.id == action.payload.id
 )
    // console.log(findProduct);    // it will give value -1
    // after condition we will see in redux 
  if (findProduct !== -1){
    state.cartItem[findProduct].qun +=1
  } else{
    state.cartItem = [...state.cartItem, action.payload]
  } 
     


   
                                    }
  
  },
})


export const {addTocart} = productSlice.actions

export default productSlice.reducer