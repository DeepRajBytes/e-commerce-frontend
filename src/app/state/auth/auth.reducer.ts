import { createReducer, on } from "@ngrx/store";
import { login, loginFailure, loginSuccess, signup, signupFailure, signupSuccess } from "./auth.action";

const initialState={
    user:null,
    loading:false,
    error:null
}


export const authReducer = createReducer(
    initialState,
    on(login , (state)=>({...state,loading:true,error:null})),
    on(loginSuccess , (state,{user})=>({...state,loading:true,error:null,user})),
    on(loginFailure , (state,{error})=>({...state,loading:true,error:error})),


    on(signup , (state)=>({...state,loading:true,error:null})),
    on(signupSuccess , (state,{user})=>({...state,loading:true,error:null,user})),
    on(signupFailure , (state,{error})=>({...state,loading:true,error:error})),

)                  