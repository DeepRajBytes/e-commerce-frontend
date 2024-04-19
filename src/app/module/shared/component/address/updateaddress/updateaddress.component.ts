import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';
import { Userservice } from 'src/app/state/user/user.service';

@Component({
  selector: 'app-updateaddress',
  templateUrl: './updateaddress.component.html',
  styleUrls: ['./updateaddress.component.scss']
})
export class UpdateaddressComponent implements OnInit{


address:any

  constructor(private dialog:Dialog,private store:Store<AppState>,private user: Userservice,private fb: FormBuilder ,
    @Inject(MAT_DIALOG_DATA) public data: { address: any } 
    ) {
    this.address = data.address;
    console.log("hello",data);
   }
  


  ngOnInit(): void {
    this.myform.patchValue({
            Name: this.address.Name,
            Address: this.address.Address,
            City: this.address.City,
            Mobile: this.address.Mobile,
            Pincode:this.address.Pincode,
            NearBy:this.address.NearBy
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
    if(this.myform.valid){
    this.user.updateuseraddress(this.address._id,this.myform.value)

    

    this.store.pipe(select(store => store.user)).subscribe((user) => {
      // console.log("user state", user)
      if (user.address) {
        this.dialog.closeAll();
       }
   
   })
    
  }
}


}
