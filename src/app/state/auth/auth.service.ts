import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { BASE_API_URL } from "src/app/config/api";
import { loginFailure, loginSuccess, signupFailure, signupSuccess } from "./auth.action";
import Swal from "sweetalert2";


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
                let errorMessage = 'An error occurred while logging in';
                
                if (error.status === 404 && error.error && error.error.message) {
                    errorMessage = error.error.message;
                    console.log("1",errorMessage)
                } else if (error.status === 401 && error.error && error.error.message) {
                    errorMessage = error.error.message;
                    console.log("2",errorMessage)
                } else if (error.message) {
                    errorMessage = error.message;
                    console.log("3",errorMessage)
                }
            
                // Display the error message using SweetAlert2
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: "Login Failed , Please Check Email And Password",
                });
            
                return of(loginFailure({ error: errorMessage }));
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
            // catchError((error) => {
            //     return of(
            //         signupFailure(
            //             error.response && error.response.data.message ? error.response.data.message : error.message
            //         )
            //     )
            // })
            catchError((error) => {
                let errorMessage = 'An error occurred while logging in';
                
                if (error.status === 404 && error.error && error.error.message) {
                    errorMessage = error.error.message;
                    console.log("1",errorMessage)
                } else if (error.status === 401 && error.error && error.error.message) {
                    errorMessage = error.error.message;
                    console.log("2",errorMessage)
                } else if (error.message) {
                    errorMessage = error.message;
                    console.log("3",errorMessage)
                }
            
                // Display the error message using SweetAlert2
                Swal.fire({
                    icon: 'error',
                    title: 'SignUp Failed',
                    text: "User Already Exist",
                });
            
                return of(signupFailure({ error: errorMessage }));
            })
            



        ).subscribe((action)=>this.store.dispatch(action))
    }
}