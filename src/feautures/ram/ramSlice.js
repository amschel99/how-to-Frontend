
import {createSlice } from "@reduxjs/toolkit"

const initialState= {
   ram:""
}

const ramSlice= createSlice({
name:"ram",
initialState,
reducers:{
    ram:(state, action)=>{
        const ram=action.payload.ram
 state.ram=ram
    }

}


})

export const {ram}=ramSlice.actions

export default ramSlice.reducer
