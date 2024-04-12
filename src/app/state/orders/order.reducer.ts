import { createReducer, on } from "@ngrx/store";
import * as OrderAction from './order.action'


export interface OrderState{
    loading:boolean ;
    error:string | null ;
    order : any | null ;
    orders : any[];
}
const initialState : OrderState = {
    loading: false,
    error: null,
    order: null,
    orders:[]
}
export const OrderReducer = createReducer(
    initialState,
    on( OrderAction.createOrderequest,
        OrderAction.getOrderByIdRequest,
        OrderAction.getOrderRequestHistory ,(state)=>({
        ...state,
        loading:true ,
        error:null 
    })),


    on(OrderAction.createOrderrequestSuccess , (state , {order})=>({
        ...state ,
        loading : false , 
        order
    })),
    on(OrderAction.getOrderByIdRequestSuccess , (state , {order})=>({
        ...state ,
        loading : false , 
        order
    })),
    on(OrderAction.getOrderRequestHistorySucccess, (state , {orders})=>({
        ...state ,
        loading : false , 
        orders
    })),
   
   
    on( OrderAction.createOrderequestFailure,
        OrderAction.getOrderByIdRequestFailure, 
        OrderAction.getOrderRequestHistoryFailure, (state ,{error})=>({
        ...state,
        loading:false,
        error 
    })),
    // In the reducer file

   
    on(OrderAction.updateOrderequest, state => ({
        ...state,
        loading: true,
        error: null
    })),
   
    on(OrderAction.updateOrderequestSuccess, (state, { order }) => ({
        ...state,
        loading: false,
        order
    })),
   
    on(OrderAction.updateOrderequestFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    }))
)
