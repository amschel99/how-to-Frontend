import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./feautures/cart/cartSlice"
import searchSlice from "./feautures/search/searchSlice"
import sortSlice from "./feautures/Sort/sortSlice"

 const store= configureStore({reducer:{
cart:cartSlice,
search:searchSlice,
sort:sortSlice


 }})
 export default store