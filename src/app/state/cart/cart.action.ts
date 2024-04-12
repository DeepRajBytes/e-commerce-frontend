import { createAction, props } from "@ngrx/store"


// 1
export const  addItemToCart = createAction('[Cart] Add Item to cart request',
props<{reqData:any}>()
)

export const addItemToCartSuccess =  createAction('[Cart] Add Item to cart request success',
props<{payload:any}>())

export const addItemToCartFailure =  createAction('[Cart] Add Item to cart request failure',
props<{error:any}>())



// 2
export const  getCartRequest = createAction('[Cart] get cart request',)

export const getCartRequestSuccess =  createAction('[Cart] get cart request success',
props<{payload:any}>()
)
export const getCartRequestFailure =  createAction('[Cart] get cart request failure',
props<{error:any}>())



// 3
export const  removeCartItem = createAction('[Cart] Remove Cart item request',
props<{reqData:any}>()
)

export const removeCartItemSuccess =  createAction('[Cart] Remove Cart item success',
props<{cartItemId:any}>())

export const removeCartItemFailure =  createAction('[Cart]  remove cart item failure',
props<{error:any}>())


//4
export const updateCartItem = createAction('[Cart] Update Cart Item request',
props<{reqData:any}>()
)

export const updateCartItemSuccess = createAction('[Cart] Update cart item Success',
props<{payload:any}>()
)

export const updateCartItemFailure = createAction('[Cart] Update Cart item failure',   props<{error:any}>()
)

//5
export const  deleteCartItem = createAction('[Cart] delete Cart item request',
props<{reqData:any}>()
)

export const deleteCartItemSuccess =  createAction('[Cart] delete Cart item success',
props<{cartItemId:any}>())

export const deleteCartItemFailure =  createAction('[Cart]  delete cart item failure',
props<{error:any}>())