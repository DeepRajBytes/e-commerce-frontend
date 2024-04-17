import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { BASE_API_URL } from "src/app/config/api";
import { getUserProfileFailure, getUserProfileSuccess, getUserProfileUpdateSuccess, logoutSuccess } from "./user.action";




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
                console.log("user to aaya hai",user);
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
        console.log("edit ke liye data",reqData)
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

    logout(){
        localStorage.removeItem("JWT");
        this.store.dispatch(logoutSuccess())
    }
}