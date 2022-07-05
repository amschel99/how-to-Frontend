
import {createSlice } from "@reduxjs/toolkit"
const initialState={

    totalItems:0,
    totalPrice:0,

    items:[],
   
}


const cartSlice= createSlice(
{

  name:"cart",
  initialState,
  reducers:{
    itemAdded:{
reducer:(state, action)=>{
    

     state.totalPrice+=action.payload.price

 
    const productExists= state.items.find((product)=>product.name===action.payload.name)
    if(productExists){
     if(!productExists.quantity){
        productExists.quantity=1
     }
        //do sth
        productExists.quantity+=1
       
 return 

    }
   
    state.totalItems+=1
    
   
    //add the item to the array of Items
     state.items.push(action.payload)
 
},
prepare: ({name,price,image})=>{
    //change the payload
    return {
        payload:{
name,
price,
image


        }
    }
}


    }
  }
}

)
export const {itemAdded}= cartSlice.actions

export default cartSlice.reducer