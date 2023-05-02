import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";
const initialState = [ 
      { id: shortid.generate() , text:null , complete: false} 
]


const todoSlice = createSlice({
      name: 'todo',
      initialState,
      reducers: {

      } 
})

export default todoSlice.reducer