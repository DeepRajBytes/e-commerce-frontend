import { createReducer, on } from "@ngrx/store"
import { findProductByCategoryRequestFailure, findProductByCategoryRequestSuccess, findProductByIDRequestFailure, findProductByIDRequestSuccess, findproductbyParticularcategoryFailure, findproductbyParticularcategorySuccess, reviewproductRequestFailure, reviewproductRequestSuccess, updateProduct, wishlistRequestSuccess } from "./product.action"



const initialState={
    products:[],
    loading:false,
    error:null,
    product:[],
    message:'',
    reviews:null,
    deep:''
}

export const productReducer = createReducer(
    initialState,
    on(findProductByCategoryRequestSuccess,(state,{payload})=>({
        ...state ,
         products : payload , 
         content : payload.content ,
         loading :false 
    })),
    on(findProductByIDRequestSuccess,(state,{payload})=>({
    ...state ,
     product : payload , 
     loading :false 
    })),

    on(findproductbyParticularcategorySuccess,(state,{payload})=>({
        ...state ,
         products : payload , 
         content : payload?.content ,
         loading :false 
    })),

    on(reviewproductRequestSuccess,(state,{payload})=>({

       ...state ,
       
        message: JSON.stringify(payload), 
        loading: false
    })),
    on(wishlistRequestSuccess , (state,{messay})=>({
        ...state,
        deep:messay,
        loading:false
    })),
    
    on(updateProduct, (state, { product }) => ({
        ...state,
        product: product,
        loading: false
    })),
   

on(reviewproductRequestFailure,findProductByCategoryRequestFailure,findProductByIDRequestFailure,findproductbyParticularcategoryFailure,(state,{error})=>({
     ...state ,
     error:error ,
     loading :false 
})),



)