
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { BASE_API_URL } from "src/app/config/api";
import { findProductByCategoryRequestFailure, findProductByCategoryRequestSuccess, findProductByIDRequestFailure, findProductByIDRequestSuccess, findproductbyParticularcategoryFailure, findproductbyParticularcategorySuccess, reviewproductRequestFailure, reviewproductRequestSuccess } from "./product.action";


@Injectable({
    providedIn: 'root',
})

export class ProductService {
    API_BASE_URL = BASE_API_URL;

    private getHeader(): HttpHeaders {
        const token = localStorage.getItem("JWT");
        return new HttpHeaders().set("Authorization", `Bearer ${token}`);
    }
    constructor(
        private store: Store,
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute
    ) { }


    findProductByCategory(reqData: any) {
        const { color, sizes, minPrice, maxPrice, minDiscount, category, pageSize, pageNumber, stock, sort } = reqData ;
     

        let params = new HttpParams().set("color",color).set("sizes",sizes).set("minPrice",minPrice).set("maxPrice",maxPrice).set("minDiscount",minDiscount).set("category",category).set("pageSize",pageSize).set("pageNumber",pageNumber).set("stock",stock).set("sort",sort)
        
        const headers = this.getHeader()
        const query = {params , headers }
        return this.http.get(`${this.API_BASE_URL}/api/products/`,query).pipe(map((data:any)=>{
            // console.log("fondeded product data by cat. ",data);
            
        return findProductByCategoryRequestSuccess({payload:data})

        }),catchError((error)=>{

            console.log("received error in findbycategory",error)
            return of(findProductByCategoryRequestFailure(error));
        })
    
        ).subscribe((action)=>this.store.dispatch(action));
    }

    findproductbyParticularcategory(category: any) {
           
            
           return this.http.post(`${this.API_BASE_URL}/api/products/category`,category).pipe(map((data:any)=>{
            //    console.log("foundeded particular wala data ",data);
               
                return findproductbyParticularcategorySuccess({payload:data})
           }),catchError((error)=>{
   
               console.log("received error in findbyid",error)
               return of(findproductbyParticularcategoryFailure(error));
           })
       
           ).subscribe((action)=>this.store.dispatch(action));
       }


     findProductById(productId: any) {
     const headers = this.getHeader()
        return this.http.get(`${this.API_BASE_URL}/api/products/id/${productId}`,{headers}).pipe(map((data:any)=>{
            // console.log("foundeded id wala data ",data);

            return findProductByIDRequestSuccess({payload:data})
        }),catchError((error)=>{

            console.log("received error in findbyid",error)
            return of(findProductByIDRequestFailure(error));
        })
    
        ).subscribe((action)=>this.store.dispatch(action));
    }
  
    reviewProduct(reqData:any){
        
        const headers = this.getHeader();
        
        this.http.post(`${this.API_BASE_URL}/api/reviews/create`,reqData ,{headers}).pipe(map((data:any)=>{
            // console.log("foundeded review wala data ",data);
            return reviewproductRequestSuccess({payload:data})
        }),catchError((error)=>{

            console.log("received error in findbyid",error)
            return of(reviewproductRequestFailure(error));
        }))
        .subscribe((action)=>this.store.dispatch(action));
        }

}















// chat gpt wala
// findProductByCategory(reqData: any) {
//     const { color, sizes, minPrice, maxPrice, minDiscount, category, pageSize, pageNumber, stock, sort } = reqData;

//     let params = new HttpParams()
//         .set("color", color)
//         .set("sizes", sizes)
//         .set("minPrice", minPrice)
//         .set("maxPrice", maxPrice)
//         .set("minDiscount", minDiscount)
//         .set("category", category)
//         .set("pageSize", pageSize)
//         .set("pageNumber", pageNumber)
//         .set("stock", stock)
//         .set("sort", sort);

//     const headers = this.getHeader();

//     return this.http.get(`${this.API_BASE_URL}/api/products/`, { headers, params }).pipe(
//         map((data: any) => {
//             console.log("Found product data by category: ", data);
//             return findProductByCategoryRequestSuccess({ payload: data });
//         }),
//         catchError((error) => {
//             console.log("Received error in findProductByCategory: ", error);
//             return of(findProductByCategoryRequestFailure(error));
//         })
//     );
// }