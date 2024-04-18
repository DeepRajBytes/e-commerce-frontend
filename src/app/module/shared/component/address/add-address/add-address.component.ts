import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';
import { Userservice } from 'src/app/state/user/user.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent {
  constructor(private fb:FormBuilder , private dialog : Dialog,private store: Store<AppState> , private UserService : Userservice){}

  myform:FormGroup = this.fb.group({
    Name:["",Validators.required],
    Address:["",Validators.required], 
    City:["",Validators.required],
    Pincode:["",Validators.required],
    Mobile:["",Validators.required],
    NearBy:["",Validators.required],
    })
  
  
  handlesubmit() {
    
      // const formValue =  this.myform.value
      console.log("this is my form value",this.myform.value)
      this.UserService.Addaddress(this.myform.value);
   }
    
}
