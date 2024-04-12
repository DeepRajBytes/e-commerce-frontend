import { createReducer, on } from "@ngrx/store";                                                      
import { getUserProfile, getUserProfileFailure, getUserProfileSuccess, getUserProfileUpdateSuccess, logoutSuccess } from "./user.action";

const initialState={
    userProfile:null,
    loading:false,
    error:null
}


export const userReducer = createReducer(
    initialState,
    on(getUserProfile , (state)=>({...state,loading:true,error:null})),
    on(getUserProfileSuccess , (state,{userProfile})=>({...state,loading:true,error:null,userProfile})),
    on(getUserProfileUpdateSuccess , (state,{userProfile})=>({...state,loading:true,error:null,userProfile})),
    on(getUserProfileFailure , (state,{error})=>({...state,loading:true,error:error})),
    on(logoutSuccess,()=>initialState)


)                  