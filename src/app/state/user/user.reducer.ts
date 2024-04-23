import { createReducer, on } from "@ngrx/store";                                                      
import { AddAddressSuccess, getUserProfile, getUserProfileFailure, getUserProfileSuccess, getUserProfileUpdateSuccess, logoutSuccess, updateAddress, updateAddressSuccess, updateUserProfile, getwishlist, getwishlistSuccess } from "./user.action";





const initialState= {
  userProfile: null,
  address: null,
  loading: false,
  error: null,
  updatedaddress: null,
  wishlist:null
};

export const userReducer = createReducer(
    initialState,
    on(getUserProfile , (state)=>({...state,loading:true,error:null})),

    on(getUserProfileSuccess , (state,{userProfile})=>({...state,loading:true,error:null,userProfile})),

    on(getUserProfileUpdateSuccess , (state,{userProfile})=>({...state,loading:true,error:null,userProfile})),
  
   on(AddAddressSuccess, (state, { address }) => ({
    ...state,
    loading:true,
    address: address
   })),
   on(getwishlistSuccess , (state,{wishlist})=>({...state,loading:true,error:null,wishlist})),


   on(updateUserProfile, (state, { userProfile }) => ({
    ...state,
    userProfile,
    loading: false,
    error: null
})),

  // on(AddAddressSuccess, (state, { address }) => {
  //   // Ensure state.userProfile is an object
  //   const updatedUserProfile = {
  //     ...(state.userProfile || {}), // Fallback to an empty object if userProfile is null
  //     address,
  //   };
  //   return {
  //     ...state,
  //     loading: true,
  //     userProfile: updatedUserProfile,
  //   };
  // }),
   
  on(updateAddressSuccess , (state ,{address})=>({
    ...state,
    address:address,
    loading:true
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









    // interface UserProfile {
//     address: any[];
//     // Add other properties as needed
// }

// interface UserState {
//     userProfile: UserProfile | null;
//     address: any | null;
//     loading: boolean;
//     error: any | null;
//     updatedaddress: any | null;
// }




//   on(AddAddressSuccess, (state, { address }) => {
//     // Add the new address to the userProfile's address array
//     const updatedUserProfile = {
//         ...state.userProfile,
//         address: [...(state.userProfile?.address || []), address],
//     };

//     return {
//         ...state,
//         loading: false,
//         userProfile: updatedUserProfile,
//     };
// }),