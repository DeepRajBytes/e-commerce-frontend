import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { BASE_API_URL } from "src/app/config/api";
import { AddAddressFailure, AddAddressSuccess, getUserProfileFailure, getUserProfileSuccess, getUserProfileUpdateSuccess, logoutSuccess, updateAddressFailure, updateAddressSuccess, updateUserProfile, getwishlistFailure, getwishlistSuccess,  } from "./user.action";


@Injectable({
    providedIn: 'root',
})

export class Userservice {
    private apiUrl = BASE_API_URL + '/api/users';
    // private headers: HttpHeaders;

    constructor(private http: HttpClient, private store: Store) {
        // this.headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("JWT")}`);
    }

    getUserProfile() {
        
        const headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("JWT")}`);
       
        return this.http.get(`${this.apiUrl}/profile`, { headers }).pipe(
            map((user: any) => {
                // console.log("User profile:", user);
                return getUserProfileSuccess({ userProfile: user });
            }),
            catchError((error) => {
                console.error("Error fetching user profile:", error);
                return of(getUserProfileFailure(error));
            })
        ).subscribe((action) => this.store.dispatch(action));
    }

    getUserProfileById() {
        
        const headers=new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("JWT")}`);

        return this.http.get(`${this.apiUrl}/profile/id`, { headers }).pipe(
            map((user: any) => {
                // console.log("user to aaya hai",user);
                // return user;
                return getUserProfileSuccess({ userProfile: user });
            }),
            catchError((error) => {
                console.error("Error fetching user profile:", error);
                return of(getUserProfileFailure(error));
            })
        )
        .subscribe((action) => this.store.dispatch(action));
    }

    updateuserprofile(reqData:any){
        
        const headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("JWT")}`);
        
        return this.http.put(`${this.apiUrl}/profile/update`,reqData,{headers}).pipe(
            map((user: any) => {
    
                return getUserProfileUpdateSuccess({ userProfile: user });
            }),
            catchError((error) => {
                console.error("Error fetching user profile:", error);
                return of(getUserProfileFailure(error));
            })
            ).subscribe((action) => this.store.dispatch(action));
    }


    Addaddress(reqData:any){
        console.log("reqdata is", reqData)
        const headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("JWT")}`);
        
        this.http.post(`${this.apiUrl}/address/add`,reqData,{headers}).pipe(map((data:any)=>{
            // console.log("ye data prapt hua ", data)
            this.store.dispatch(updateUserProfile({ userProfile: data}));
            return AddAddressSuccess({address:data})

        }),catchError((error) => {
            console.error("Error fetching add adddress:", error);
            return of(AddAddressFailure(error));
        }))
        .subscribe()
        // .subscribe((action) => this.store.dispatch(action));
    }


    updateuseraddress(addressId:any , reqData:any){
        const data = {id:addressId , reqdata : reqData}
        // console.log("jo bhejege vo hai", data);
        const headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("JWT")}`);

        this.http.put(`${this.apiUrl}/address/update`,data,{headers}).pipe(map((data:any)=>{
            // console.log("data ye aaya backend se", data)
            if(data){
                this.getUserProfile();
            }
            return updateAddressSuccess({address:data})

        }),catchError((error) => {
            console.error("Error fetching add adddress:", error);
            return of(updateAddressFailure(error));
        }))
        .subscribe((action) => this.store.dispatch(action))
       
    }
   


    wishlist() {
       
        const headers=new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("JWT")}`);
       
        return this.http.get(`${this.apiUrl}/wishlist`, {headers}).pipe(
            map((user: any) => {
                console.log("wishlist to aayi hai",user);
                // return user;
                return getwishlistSuccess({wishlist: user });
            }),
            catchError((error) => {
                console.error("Error fetching user profile:", error);
                return of(getwishlistFailure(error));
            })
        )
        .subscribe((action) => this.store.dispatch(action));
    }
    

    logout(){
        localStorage.removeItem("JWT");
        this.store.dispatch(logoutSuccess())
    }
}