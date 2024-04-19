import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {  select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';
import { AddAddressComponent } from 'src/app/module/shared/component/address/add-address/add-address.component';
import { UpdateaddressComponent } from 'src/app/module/shared/component/address/updateaddress/updateaddress.component';
import { UpdateComponent } from 'src/app/module/update.component';
import { Userservice } from 'src/app/state/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  profile: any
  userProfile:any
  constructor(private dialog : MatDialog,private user:Userservice , private store: Store<AppState>){}
  
  ngOnInit(): void {
    // this.user.getUserProfileById();

    
    this.store.pipe(select(store => store.user)).subscribe((userProfile) => {
      // console.log("user ka hai jo data", userProfile.address);
      this.userProfile = userProfile.userProfile; 
      if( userProfile.userProfile){
        this.dialog.closeAll();
      }
      // console.log("set of profile data", this.userProfile);
    });
  }

  handleOpenLoginModal=()=> {
    this.dialog.open(UpdateComponent,{
      disableClose:false,
      width:"400px",   
      data: { userProfile: this.userProfile }
    })
    }

    openupdatemodal(id:any){
      console.log("id is ",id)
      this.dialog.open(UpdateaddressComponent,{
        disableClose:false,
        width:"450px",
        id: 'update-dialog',
        data: { address: id }
         })
      // this.dialog.open(UpdateaddressComponent,{
      //   disableClose:false,
      //   width:"400px",   
      //   data: { userProfile: this.userProfile }
      // })
    }


    openaddaddress=()=> {
      this.dialog.open(AddAddressComponent,{
        disableClose:false,
        width:"450px",
         })
      }

}
