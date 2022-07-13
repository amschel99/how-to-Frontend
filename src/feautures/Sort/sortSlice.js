
import {createSlice } from "@reduxjs/toolkit"

const initialState= {
    sort:""
}

const sortSlice= createSlice({
name:"sort",
initialState,
reducers:{
    sort:(state, action)=>{
        const sort=action.payload.sort
 state.sort=sort
    }

}


})

export const {sort}=sortSlice.actions

export default sortSlice.reducer
