import { createReducer, on} from "@ngrx/store";

import * as CartAction from './cart.action'


export interface CartState {
    cartitems:any[],
    error:any ,
    loading :boolean,
    cart:any 
}

const initialState : CartState = {
    cartitems:[],
    error:null ,
    loading : false,
    cart:null 
};

export const cartReducer = createReducer(
    initialState ,
    on(CartAction.addItemToCart , (state)=>({
        ...state,
        loading:true,
        error:null
    })),

    on(CartAction.addItemToCartSuccess , (state , action)=>({
        ...state,
        loading:false,
        cartitems : [...state.cartitems , action.payload]
       
    })) ,

    on(CartAction.addItemToCartFailure , (state , action)=>({
        ...state,
        loading:false,
        error : action.error
    })) ,
    

    // 2
   on(CartAction.getCartRequest , (state)=>({
        ...state,
        loading : true ,
        error : null 
    } )) , 

    on(CartAction.getCartRequestSuccess, (state, action) => ({
        ...state,
        loading: false,
        cartitems: action.payload.cartitems,
        cart: action.payload,
      })),
    // on(CartAction.getCartRequestSuccess, (state, action) => {
    //     console.log('Action Payload:', action.payload); // Check payload structure
    //     console.log('State:', state); // Check state structure before updating
    //     return {
    //       ...state,
    //       loading: false,
    //       cartitems: action.payload.cartitems, 
    //       cart: action.payload,
    //     };
    //   }),



    on(CartAction.getCartRequestFailure , (state , action)=>({

        ...state ,
       error: action.error,
       loading: false
    })),

    // 3 
    on(CartAction.removeCartItem , (state)=>({
        ...state,
        loading : true ,
        error : null

    })) , 
    on(CartAction.removeCartItemSuccess , (state , action)=>({
        ...state,
        loading: false ,
        cartitems : state.cartitems.filter((item)=> item.id !== action.cartItemId)
    })),
    on(CartAction.removeCartItemFailure , (state , action)=>({
        ...state ,
        error : action.error ,
        loading :false
    })),

    // 4 

    on(CartAction.updateCartItem , (state)=>({
        ...state,
        loading:true,
        error:null
    })),

    on(CartAction.updateCartItemSuccess , (state , action)=>({
        ...state ,
        loading : false,
        cartitems : state.cartitems.map((item)=>
        item.id === action.payload.id ? action.payload : item 
        )
    })),
    on(CartAction.updateCartItemFailure , (state , action)=>({
        ...state ,
        error : action.error ,
        loading :false
    })),

    //5
    on(CartAction.deleteCartItem , (state)=>({
        ...state,
        loading : true ,
        error : null

    })) , 
    on(CartAction.deleteCartItemSuccess, (state , action)=>({
        ...state,
        loading: false ,
        cartitems : state.cartitems.filter((item)=> item.id !== action.cartItemId)
    })),
    on(CartAction.deleteCartItemFailure , (state , action)=>({
        ...state ,
        error : action.error ,
        loading :false
    })),

)
