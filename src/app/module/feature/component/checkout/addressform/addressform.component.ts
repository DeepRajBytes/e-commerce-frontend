import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';
import { AddAddressComponent } from 'src/app/module/shared/component/address/add-address/add-address.component';
import { AddressComponent } from 'src/app/module/shared/component/address/address.component';
import { UpdateaddressComponent } from 'src/app/module/shared/component/address/updateaddress/updateaddress.component';
import { orderService } from 'src/app/state/orders/order.service';
import { Userservice } from 'src/app/state/user/user.service';


@Component({
  selector: 'app-addressform',
  templateUrl: './addressform.component.html',
  styleUrls: ['./addressform.component.scss']
})
export class AddressformComponent implements OnInit{


  
  userProfile: any;


constructor(private dialog:Dialog,private fb:FormBuilder , private orderService : orderService , private user:Userservice , private store: Store<AppState>){}  


ngOnInit(): void {
  // this.user.getUserProfileById();

  
  this.store.pipe(select(store => store.user)).subscribe((userProfile) => {
  this.userProfile = userProfile.userProfile; 
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


  openAddressmodal(){
    try {
      this.dialog.open(AddAddressComponent, {
          disableClose: false,
          width: "450px",
         
      });
  } catch (error) {
      console.error("Failed to open the dialog:", error);
  }
  }


  openupdatemodal(id:any){
    console.log("id is ",id)
    try {
      this.dialog.open(AddressComponent, {
          disableClose: false,
          width: "450px",
          data: { address: id },
      });
  } catch (error) {
      console.error("Failed to open the dialog:", error);
  }
  }

handlesubmit() {
  if(this.myform.valid){
    const formValue =  this.myform.value
    this.orderService.createOrder(formValue)
    return console.log('address mil gya', formValue)
  }
  
  }
  
  handelcreateorder(id:any) {
    this.orderService.createOrder({id:id._id});
  }

}
