import { Component, OnInit , ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';
import { Userservice } from 'src/app/state/user/user.service';

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
    // Call getUserProfileById() here to fetch user profile data
    // this.user.getUserProfileById();

    // Subscribe to user state changes to get user profile
    this.store.pipe(select(store => store.user)).subscribe((userProfile) => {
      this.userProfile = userProfile.userProfile;
      // Mark for check to update the view
      this.cdr.detectChanges();
    });
  }
  // address():void{
  //   this.user.getUserProfileById();
  //   // this.store.pipe(select(store => store.user)).subscribe((userProfile) => {
  //   //   // console.log("user ka hai jo data", userProfile);
  //   //   this.userProfile = userProfile.userProfile; 
  //   //   console.log("user sahab is", this.userProfile)
  //   //   this.cdr.markForCheck();
  //   //   // console.log("set of profile data", this.userProfile);
  //   // });
  // }

}
