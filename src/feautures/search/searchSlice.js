
import {createSlice } from "@reduxjs/toolkit"

const initialState= {
    search:""
}

const searchSlice= createSlice({
name:"Search",
initialState,
reducers:{
    search:(state, action)=>{
        const search=action.payload.search
 state.search=search
    }

}


})

export const {search}=searchSlice.actions

export default searchSlice.reducer
