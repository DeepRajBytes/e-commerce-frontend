import { createAction, props } from "@ngrx/store"

export const getUserProfile = createAction('[User] Get User')

export const getUserProfileSuccess = createAction('[User] Get User Profile success',props<{userProfile:any}>())

export const getUserProfileFailure = createAction('[User] Get User Profile failure',props<{error:any}>())

export const getUserProfileUpdateSuccess = createAction('[User] Get User Profile success',props<{userProfile:any}>())
export const logoutSuccess = createAction('[User] Logout success') 



export const AddAddress = createAction('[User] Get User')

export const AddAddressSuccess = createAction('[User] Get User Profile success',props<{address:any}>())

export const AddAddressFailure = createAction('[User] Get User Profile failure',props<{error:any}>())


export const updateProfile = createAction('[Product] Update Product', props<{ userProfile: any }>());
