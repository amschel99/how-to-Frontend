
import {createSlice } from "@reduxjs/toolkit"

const initialState= {
    brand:""
}

const brandSlice= createSlice({
name:"sort",
initialState,
reducers:{
   brand:(state, action)=>{
        const brand=action.payload.brand
 state.brand=brand
    }

}


})

export const {brand}=brandSlice.actions

export default brandSlice.reducer
