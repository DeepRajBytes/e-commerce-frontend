import { Component, OnInit , ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';
import { Userservice } from 'src/app/state/user/user.service';
import { AddAddressComponent } from './add-address/add-address.component';
import { UpdateaddressComponent } from './updateaddress/updateaddress.component';
import { DataserviceService } from 'src/app/services/dataservice.service';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressComponent implements OnInit{
  userProfile:any = null
  constructor(private dialog : MatDialog,private user:Userservice , private store: Store<AppState> , private dataservice:DataserviceService){}
 
 
  ngOnInit(): void {
     this.store.pipe(select(store => store.user)).subscribe((userProfile) => {
      this.userProfile = userProfile.userProfile;
    });

  }

  closeAuthDialog() {
   
    const authDialogRef = this.dialog.getDialogById('address-dialog');
    if (authDialogRef) {
      authDialogRef.close();
    }
  }
  closeupdateDialog() {
   
    const authDialogRef = this.dialog.getDialogById('update-dialog');
    if (authDialogRef) {
      authDialogRef.close();
    }
  }

  openupdatemodal(id:any){
    // console.log("id is ",id)
    this.dialog.open(UpdateaddressComponent,{
      disableClose:false,
      width:"450px",
      id: 'update-dialog',
      data: { address: id }
       })
  }

  
    openaddaddress=()=> {
      this.dialog.open(AddAddressComponent,{
        disableClose:false,
        width:"450px",
        id: 'address-dialog'
         })
      }

      makeaddress(address:any){
        this.dataservice.setdefaultaddress(address)
       
        if(address){
          const addressDialogRef = this.dialog.getDialogById('address-dialog');
          if (addressDialogRef) {
            setTimeout(() => {
              addressDialogRef.close();
            }, 500);
              
          }
        }
      }

      isDefaultAddress(address: any): boolean {
        return this.dataservice.getdefaultaddress() && this.dataservice.getdefaultaddress() === address;
    }
    

  }
  

