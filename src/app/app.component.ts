import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Userservice } from './state/user/user.service';
import { AppState } from './models/Appstate';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';

  constructor(private route :Router  ,private userService:Userservice , private store:Store<AppState>){}
  


  isPaymentSuccessRoute(): boolean {
    return this.route.url.includes('payment-success');
  }


  ngOnInit(): void {
    if(localStorage.getItem("JWT")) this.userService.getUserProfile()
    
    this.store.pipe(select((store)=>store.auth)).subscribe((user)=>{
      this.userService.getUserProfile();
    })
  }

}
