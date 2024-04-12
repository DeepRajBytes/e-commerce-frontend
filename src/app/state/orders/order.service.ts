import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { BASE_API_URL } from "src/app/config/api";
import { createOrderequestFailure, createOrderrequestSuccess, getOrderByIdRequestFailure, getOrderByIdRequestSuccess, getOrderRequestHistoryFailure, getOrderRequestHistorySucccess, updateOrderequestFailure, updateOrderequestSuccess } from "./order.action";

@Injectable({
    providedIn: 'root',
})

export class orderService {

    API_BASE_URL = BASE_API_URL;
    private headers;

    constructor(
        private http: HttpClient,
        private store: Store,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.headers = new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem("JWT")}`,
            'content-Type': 'application/json',
        });
    }

    // 1
    createOrder(reqData: any) {
        console.log("reqdata is ", reqData);
        const url = `${this.API_BASE_URL}/api/orders/`;
        return this.http.post(url, reqData, { headers: this.headers }).pipe(map((data: any) => {
            console.log("created order data is", data);
            if (data._id) {
                this.router.navigate([`/checkout/payment/${data._id}`],
                    { queryParams: { step: '3', order_id: data._id } }
                )
            };
            return createOrderrequestSuccess({ order: data })
        }),
            catchError((error: any) => {
                console.log("found error while create order", error);
                return of(createOrderequestFailure(error.response && error.response.data.message ? error.response.data.message : error.message))

            })
        ).subscribe((action)=>this.store.dispatch(action))
    }

   
    // 2
    getOrderById(orderId : string){
        const url = `${this.API_BASE_URL}/api/orders/${orderId}`;

        return this.http.get(url , {headers : this.headers}).pipe(map((data:any)=>{

    //    console.log("foundede data of order by id is - ", data )
       return getOrderByIdRequestSuccess({order:data})
     
    }),
    
    catchError((error: any) => {
        console.log("found error while get order by id", error);

        return of(getOrderByIdRequestFailure(error.response && error.response.data.message ? error.response.data.message : error.message))
       })

      ).subscribe((action)=>this.store.dispatch(action))
      
    }

    //3
    getOrderHistory(){
        const url = `${this.API_BASE_URL}/api/orders/user/history`;

        return this.http.get(url , {headers : this.headers}).pipe(map((data:any)=>{
            console.log("order history details",data);
            return getOrderRequestHistorySucccess({orders:data}) 
        }),
        catchError((error: any) => {
            console.log("found error while get order by id", error);
    
            return of(getOrderRequestHistoryFailure(error.response && error.response.data.message ? error.response.data.message : error.message))
           })
         ).subscribe((action)=>this.store.dispatch(action))
    }

    //4
    updateOrder(orderId: string, updateData: any) {
        const url = `${this.API_BASE_URL}/api/orders/updatepayment/${orderId}`;
    
        return this.http.put(url, updateData, { headers: this.headers }).pipe(
            map((data: any) => {
                console.log("updated order data is", data);
                return updateOrderequestSuccess({ order: data })
            }),
            catchError((error: any) => {
                console.log("found error while updating order", error);
                return of(updateOrderequestFailure(error.response && error.response.data.message ? error.response.data.message : error.message))
            })
        ).subscribe((action) => this.store.dispatch(action))
    }
}