import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./feautures/cart/cartSlice"
import searchSlice from "./feautures/search/searchSlice"
import sortSlice from "./feautures/Sort/sortSlice"
import brandSlice from "./feautures/brand/brandSlice"

 const store= configureStore({reducer:{
cart:cartSlice,
search:searchSlice,
sort:sortSlice,
brand:brandSlice


 }})
 export default store