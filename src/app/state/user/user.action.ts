import { createAction, props } from "@ngrx/store"

export const getUserProfile = createAction('[User] Get User')

export const getUserProfileSuccess = createAction('[User] Get User Profile success',props<{userProfile:any}>())

export const getUserProfileFailure = createAction('[User] Get User Profile failure',props<{error:any}>())

export const getUserProfileUpdateSuccess = createAction('[User] Get User Profile success',props<{userProfile:any}>())


export const logoutSuccess = createAction('[User] Logout success') 



export const AddAddress = createAction('[User] Get User',props<{ address: any }>())

export const AddAddressSuccess = createAction('[User] Get User Profile success',props<{address:any}>())

export const AddAddressFailure = createAction('[User] Get User Profile failure',props<{error:any}>())



export const updateAddress = createAction('[User] Get User')

export const updateAddressSuccess = createAction('[User] Get User Profile success',props<{address:any}>())

export const updateAddressFailure = createAction('[User] Get User Profile failure',props<{error:any}>())

export const updateUserProfile = createAction('[User] Update User Profile', props<{ userProfile: any }>());

