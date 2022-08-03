import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./feautures/cart/cartSlice"
import searchSlice from "./feautures/search/searchSlice"
import sortSlice from "./feautures/Sort/sortSlice"
import brandSlice from "./feautures/brand/brandSlice"
import ramSlice from "./feautures/ram/ramSlice"
import osSlice from "./feautures/os/osSlice"
import diskSlice from "./feautures/disk/diskSlice"


 const store= configureStore({reducer:{
cart:cartSlice,
search:searchSlice,
sort:sortSlice,
brand:brandSlice,
ram:ramSlice,
os:osSlice,
disk:diskSlice


 }})
 export default store