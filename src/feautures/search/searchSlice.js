
import {createSlice } from "@reduxjs/toolkit"

const initialState= {
    search:""
}

const searchSlice= createSlice({
name:"Search",
initialState,
reducers:{
    search:(state, action)=>{
return state.search=action.payload.search
    }

}


})

export const {search}=searchSlice.actions

export default searchSlice.reducer
