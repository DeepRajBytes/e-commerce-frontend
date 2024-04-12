import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { BASE_API_URL } from "src/app/config/api";
import { loginFailure, loginSuccess, signupSuccess } from "./auth.action";


@Injectable({
    providedIn: 'root',
})

export class Authservice {
    private apiUrl = BASE_API_URL + '/auth';

    constructor(private http: HttpClient, private store: Store) { }


    login(user: any) {
        return this.http.post(`${this.apiUrl}/signin`, user).pipe(map((user: any) => {
            console.log("user signin", user);
            if (user.JWT) {
                localStorage.setItem("JWT", user.JWT)
            }
            return loginSuccess({ user })
        }),
            catchError((error) => {
                return of(
                    loginFailure(
                        error.response && error.response.data.message ? error.response.data.message : error.message
                    )
                )
            })


        ).subscribe((action)=>this.store.dispatch(action))
    }

    signup(signupData: any) {
        return this.http.post(`${this.apiUrl}/signup`, signupData).pipe(map((user: any) => {
            console.log("user signup", user);
            if (user.JWT) {
                localStorage.setItem("JWT", user.JWT)
            }
            return signupSuccess({ user })
        }),
            catchError((error) => {
                return of(
                    signupSuccess(
                        error.response && error.response.data.message ? error.response.data.message : error.message
                    )
                )
            })


        ).subscribe((action)=>this.store.dispatch(action))
    }
}