import { createReducer, on } from "@ngrx/store";                                                      
import { AddAddressSuccess, getUserProfile, getUserProfileFailure, getUserProfileSuccess, getUserProfileUpdateSuccess, logoutSuccess, updateProfile } from "./user.action";

const initialState={
    userProfile:null,
    address:null,
    loading:false,
    error:null
}
export const userReducer = createReducer(
    initialState,
    on(getUserProfile , (state)=>({...state,loading:true,error:null})),

    on(getUserProfileSuccess , (state,{userProfile})=>({...state,loading:true,error:null,userProfile})),

    on(getUserProfileUpdateSuccess , (state,{userProfile})=>({...state,loading:true,error:null,userProfile})),
  
   on(AddAddressSuccess, (state, { address }) => ({
    ...state,
    address : address ,
    loading:false
   })),

    

    

    // on(updateProfile, (state, { userProfile }) => ({
    //     ...state,
    //     error:null,
    //     userProfile,
    //     loading: false
    // })),

    
    on(getUserProfileFailure , (state,{error})=>({...state,loading:true,error:error})),
    on(logoutSuccess,()=>initialState)
    )                  