import {createSlice} from '@reduxjs/toolkit'

export interface UserInterface{
    user:string|null,
    isAuthenticated:boolean
}
const initialState:UserInterface={
    user:null,
    isAuthenticated:false,
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
            state.isAuthenticated=true;
        },
        logout:(state)=>{
            state.user=null;
            state.isAuthenticated=false;
        },
    },
});
export const {login,logout}=authSlice.actions;

export default authSlice.reducer;