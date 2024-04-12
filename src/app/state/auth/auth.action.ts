import { createAction, props } from "@ngrx/store";

export const login = createAction('[Auth] login',props<{email:string,password:string}>())

export const loginSuccess = createAction('[Auth] login success',props<{user:any}>())

export const loginFailure = createAction('[Auth] login failure',props<{error:any}>())

export const signup = createAction('[Auth] signup',props<{user:any}>())

export const signupSuccess = createAction('[Auth] signup success',props<{user:any}>())

export const signupFailure = createAction('[Auth] signup failure',props<{error:any}>())
