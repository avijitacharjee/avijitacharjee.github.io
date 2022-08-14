import {createSlice} from "@reduxjs/toolkit";
export const counterSlice = createSlice({
   name : 'counter',
   initialState : {
       value : 0,
   },
    reducers : {
       increment : (state)=>{
           state.value+=1
       },
        decrement : state => {
           state.value-=1
        },
        incrementByAmount : (state, action)=>{
           state.value+=action
        }
    }
});
export const {increment,decrement,incrementByAmout } = counterSlice.actions;
export default counterSlice.reducer;