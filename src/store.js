import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./feautures/cart/cartSlice"
import searchSlice from "./feautures/search/searchSlice"

 const store= configureStore({reducer:{
cart:cartSlice,
search:searchSlice

 }})
 export default store