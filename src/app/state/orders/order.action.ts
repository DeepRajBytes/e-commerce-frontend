import { createAction, props } from "@ngrx/store";

//1
export const createOrderequest = createAction('[order] order request ',props<{reqData:any}>());

export const createOrderrequestSuccess = createAction('[order] order request success', props<{order : any}>())

export const createOrderequestFailure = createAction ('[order] order request fail',props<{error:any}>() )

//2
export const getOrderByIdRequest = createAction('[order] get order by id ',
props<{orderId: string}>())

export const getOrderByIdRequestSuccess = createAction('[order] get order by id success',props<{order:any}>())

export const getOrderByIdRequestFailure = createAction('[order] get order by if failure',props<{error:any}>())

//3
export const getOrderRequestHistory = createAction('[order]get order history ')

export const getOrderRequestHistorySucccess = createAction('[order] get order history success', props<{orders:any}>())

export const getOrderRequestHistoryFailure = createAction('[order] get order history failure', props<{error:any}>())

//4
// In order.action.ts
export const updateOrderequest = createAction('[order] update order request', props<{ orderId: string, updateData: any }>());

export const updateOrderequestSuccess = createAction('[order] update order request success', props<{ order: any }>())

export const updateOrderequestFailure = createAction('[order] update order request fail', props<{ error: any }>())
