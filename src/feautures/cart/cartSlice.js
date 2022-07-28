
import {createSlice,current } from "@reduxjs/toolkit"
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
    

     state.totalPrice+=action.payload.price//Increment the price

 //down here we increment the quantity by 1 if the product chosen is the same
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
 
},//reducer ends here
prepare: ({name,price,image})=>{
    //change the payload
    return {
        payload:{
name,
price,
image
}}
}//prepare ends here
},
//Item added ends here
itemRemoved:{
  reducer:(state, action)=>{
    //decrement the price by looking the quantity of the product you are deleting
    const productTargeted= current(state).items.find((product)=>product.name===action.payload.name)
if(!productTargeted.quantity){
  state.totalPrice-=action.payload.price


}
else{


state.totalPrice-=productTargeted.quantity*action.payload.price
//Remove the item from the array of items
}

state.items.map((item,i)=>{

  if(item.name===action.payload.name){
    //remove it from the array
return state.items.splice(i,1)


  }
  return null;
})
//decrement the total number of items
 state.totalItems-=1



  },
  prepare:({name,price,image})=>{
     return {
        payload:{
name,
price,
image
}}

  }
},
incrementQuantity:{
  reducer:(state,action)=>{
       //const productTargeted= current(state).items.find((product)=>product.name===action.payload.name)
       //

     state.items.map((item)=>{
      if(item.name===action.payload.name){
        if(!item.quantity){
          return item.quantity=2
        }
        else{
   return  item.quantity+=1
        }
   
      }
      return null

     })
     state.totalPrice+=action.payload.price

       

       // console.log(productTargeted)

  },
  prepare:({name,price,image})=>{

     return {
        payload:{
name,
price,
image
}}
  }
}





  }//reducers ends here
}

)
export const {itemAdded,itemRemoved,incrementQuantity}= cartSlice.actions

export default cartSlice.reducer