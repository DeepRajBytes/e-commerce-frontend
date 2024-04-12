import { createReducer, on } from "@ngrx/store"
import { findProductByCategoryRequestFailure, findProductByCategoryRequestSuccess, findProductByIDRequestFailure, findProductByIDRequestSuccess, findproductbyParticularcategoryFailure, findproductbyParticularcategorySuccess } from "./product.action"

const initialState={
    products:[],
    loading:false,
    error:null,
    product:[]
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
         content : payload.content ,
         loading :false 
    })),



 on(findProductByCategoryRequestFailure,findProductByIDRequestFailure,findproductbyParticularcategoryFailure,(state,{error})=>({
     ...state ,
     error:error ,
     loading :false 
})),



)