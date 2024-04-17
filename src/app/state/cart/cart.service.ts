import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { BASE_API_URL } from "src/app/config/api";
import { addItemToCartFailure, addItemToCartSuccess, getCartRequestFailure, getCartRequestSuccess, removeCartItemFailure, removeCartItemSuccess, updateCartItemFailure, updateCartItemSuccess } from "./cart.action";

@Injectable({
    providedIn: 'root',
})

export class CartService {
    API_BASE_URL = BASE_API_URL;


    constructor(
        private http: HttpClient,
        private store: Store,
        private router: Router,
        private route: ActivatedRoute
    ) {

    }

    // 1
    additemTocart(reqData: any) {
        
        const url = `${this.API_BASE_URL}/api/cart/add`;

        const headers = new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem("JWT")}`,
            'Content-Type': 'application/json',
        });

        return this.http.put(url, reqData, { headers })
        .pipe(map((data: any) => {
            return addItemToCartSuccess({ payload: data })
        }), 
        catchError((error) => {
            
            // console.log("received error in additemto cart", error)
            return of(addItemToCartFailure(error));
        })
        
        ).subscribe((action)=>this.store.dispatch(action));
    }

    // 2
    getCart(){
        const url = `${this.API_BASE_URL}/api/cart`;
        const headers = new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem("JWT")}`,
            'Content-Type': 'application/json',
        });

        return this.http.get(url ,{headers}).pipe(map((data:any)=>{
            console.log("founded data in getcart",data)
            return getCartRequestSuccess({payload:data})
        }),
         catchError((error) => {

            console.log("received error in additemto cart", error)
            return of(getCartRequestFailure(error.response && error.response.data.message ?error.response.data.message : error.message));
        })
    ).subscribe((action)=>this.store.dispatch(action));
    }


    // 3
    removeCartItem(cartItemId : Number){
        // console.log("id ye hai remoce ki ",cartItemId)
        const url = `${this.API_BASE_URL}/api/cart_items/${cartItemId}`;
        const headers = new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem("JWT")}`,
            'content-Type': 'application/json',
        });

        return this.http.delete(url ,{headers}).pipe(map((data:any)=>{
            this.store.dispatch(removeCartItemSuccess({ cartItemId: data._id }));
            this.getCart();
            return removeCartItemSuccess({cartItemId:data._id})
        }),
        
        catchError((error) => {

            console.log("received error in remove item to cart", error)
            return of(removeCartItemFailure(error.response && error.response.data.message ?error.response.data.message : error.message));
        }) 
        
        ).subscribe();

    }

    // 4
    updateCartItem(reqData:any){
        console.log("data is", reqData)


        const url = `${this.API_BASE_URL}/api/cart_items/${reqData.cartItemId}`;
        const headers = new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem("JWT")}`,
            'content-Type': 'application/json',
        });

        
        const requestData = {  cartItemId :reqData.cartItemId,quantity: reqData.data.quantity };
        return this.http.put(url , requestData , {headers}).pipe(map((data:any)=>{
            // console.log("update cart item request ", data)
            return updateCartItemSuccess({payload:data})
        }), catchError((error) => {

            console.log("received error in remove item to cart", error)
            return of(updateCartItemFailure(error.response && error.response.data.message ?error.response.data.message : error.message));
        }) 
        
        ).subscribe((action=>this.store.dispatch(action)))
}

//5
deleteCartItem(orderId : Number){
    console.log("id ye hai remoce ki ",orderId)
    const url = `${this.API_BASE_URL}/api/cart_items/deleteitem/${orderId}`;
    const headers = new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem("JWT")}`,
        'content-Type': 'application/json',
    });

    return this.http.delete(url ,{headers}).pipe(map((data:any)=>{
        // console.log("deleted item from cart is",data)
        return removeCartItemSuccess({cartItemId:data})
    }),
    catchError((error) => {
      console.log("received error in remove item to cart", error)
        return of(removeCartItemFailure(error.response && error.response.data.message ?error.response.data.message : error.message));
    }) 
    
    ).subscribe((action)=>this.store.dispatch(action));

}
}