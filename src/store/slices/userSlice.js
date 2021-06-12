import {createSlice} from '@reduxjs/toolkit'
const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null,
    
    },
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        },
       
        reset:(state,action)=>{
            state.user=null
        
        }
    }
})
export const {setUser,reset,setSocket} =userSlice.actions
export default userSlice.reducer