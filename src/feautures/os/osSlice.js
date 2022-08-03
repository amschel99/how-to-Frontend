
import {createSlice } from "@reduxjs/toolkit"

const initialState= {
   os:""
}

const osSlice= createSlice({
name:"os",
initialState,
reducers:{
    os:(state, action)=>{
        const os=action.payload.os
 state.os=os
    }

}


})

export const {os}=osSlice.actions

export default osSlice.reducer
