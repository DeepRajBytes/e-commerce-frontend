import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';
import { orderService } from 'src/app/state/orders/order.service';
import { Userservice } from 'src/app/state/user/user.service';


@Component({
  selector: 'app-addressform',
  templateUrl: './addressform.component.html',
  styleUrls: ['./addressform.component.scss']
})
export class AddressformComponent implements OnInit{


  
  userProfile: any;


constructor(private fb:FormBuilder , private orderService : orderService , private user:Userservice , private store: Store<AppState>){}  


ngOnInit(): void {
  this.user.getUserProfileById();

  
  this.store.pipe(select(store => store.user)).subscribe((userProfile) => {
    console.log("user ka hai jo data", userProfile);
    this.userProfile = userProfile.userProfile; 
    console.log("set of profile data", this.userProfile);
  });
}

myform:FormGroup = this.fb.group({
  Name:["",Validators.required],
  Address:["",Validators.required], 
  City:["",Validators.required],
  Pincode:["",Validators.required],
  Mobile:["",Validators.required],
  NearBy:["",Validators.required],
  })


handlesubmit() {
  const formValue =  this.myform.value
   this.orderService.createOrder(formValue)
   return console.log('address mil gya', formValue)
  }
  
  handelcreateorder(id:any) {
    this.orderService.createOrder({id:id._id});
  }

}
