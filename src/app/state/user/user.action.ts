import { createAction, props } from "@ngrx/store"

export const getUserProfile = createAction('[User] Get User')

export const getUserProfileSuccess = createAction('[User] Get User Profile success',props<{userProfile:any}>())

export const getUserProfileFailure = createAction('[User] Get User Profile failure',props<{error:any}>())

export const getUserProfileUpdateSuccess = createAction('[User] Get User Profile success',props<{userProfile:any}>())
export const logoutSuccess = createAction('[User] Logout success')