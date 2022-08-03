
import {createSlice } from "@reduxjs/toolkit"

const initialState= {
   disk:""
}

const diskSlice= createSlice({
name:"disk",
initialState,
reducers:{
    disk:(state, action)=>{
        const disk=action.payload.disk
 state.disk=disk
    }

}


})

export const {disk}=diskSlice.actions

export default diskSlice.reducer
