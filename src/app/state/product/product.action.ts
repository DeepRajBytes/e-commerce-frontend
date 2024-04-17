import { createAction, props } from "@ngrx/store";

export const findProductByCategoryRequest = createAction('[Prodcut] Find Product By Category Request')

export const findProductByCategoryRequestSuccess = createAction('[Prodcut] Find Product By Category Request Success',props<{payload:any}>())

export const findProductByCategoryRequestFailure = createAction('[Prodcut] Find Product By Category Request Failure',props<{error:any}>())

export const findproductbyParticularcategory = createAction('[Prodcut] Find Product By Category Request')

export const findproductbyParticularcategorySuccess = createAction('[Prodcut] Find Product By Category Request Success',props<{payload:any}>())

export const findproductbyParticularcategoryFailure = createAction('[Prodcut] Find Product By Category Request Failure',props<{error:any}>())





export const findProductByIDRequest = createAction('[Prodcut] Find Product By ID Request')

export const findProductByIDRequestSuccess = createAction('[Prodcut] Find Product By ID Request Success',props<{payload:any}>())

export const findProductByIDRequestFailure = createAction('[Prodcut] Find Product By ID Request Failure',props<{error:any}>())




export const reviewproductRequest = createAction('[Prodcut] Find Product By Category Request')

export const  reviewproductRequestSuccess = createAction('[Prodcut] Find Product By Category Request Success',props<{payload:any}>())

export const  reviewproductRequestFailure = createAction('[Prodcut] Find Product By Category Request Failure',props<{error:any}>())

export const updateProduct = createAction('[Product] Update Product', props<{ product: any }>());