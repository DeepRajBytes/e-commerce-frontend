import { Component, OnInit , ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';
import { Userservice } from 'src/app/state/user/user.service';
import { AddAddressComponent } from './add-address/add-address.component';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressComponent implements OnInit{
  userProfile:any = null
  constructor(private dialog : MatDialog,private user:Userservice , private store: Store<AppState> , private cdr : ChangeDetectorRef){}
 
 
  ngOnInit(): void {
     this.store.pipe(select(store => store.user)).subscribe((userProfile) => {
      this.userProfile = userProfile.userProfile;
    });

    this.store.pipe(select(store=>store.user)).subscribe((user)=>{
      if(user.address){
        this.dialog.closeAll();
      }
    })
  }

  
    openaddaddress=()=> {
      this.dialog.open(AddAddressComponent,{
        disableClose:false,
        width:"450px",
         })
      }
  }
  

