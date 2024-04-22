import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from 'src/app/module/auth/auth.component';
import { Userservice } from 'src/app/state/user/user.service';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';
import { AddressComponent } from '../address/address.component';
import { DataserviceService } from 'src/app/services/dataservice.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  defaultAddress: any
  isNavbarOpen: boolean = false
  isnavbarcontentisopen: boolean = false;
  currentsection: any;
  userProfile: any
  userprofileaddress: any


  constructor(private dataservice: DataserviceService, private user: Userservice, private route: Router, private dialog: MatDialog, private userService: Userservice, private store: Store<AppState>, private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {

    if (localStorage.getItem("JWT")) this.userService.getUserProfile()

    this.store.pipe(select((store) => store.user)).subscribe((user) => {
      this.userProfile = user.userProfile;
      console.log("user is ", user.userProfile)
      if (user.userProfile) {
        // this.closeAuthDialog();
        this.dialog.closeAll();

      }
      const defaultAddresss = this.userProfile.address[0]; // Index 0 address
      if (defaultAddresss) {
        this.dataservice.setdefaultaddress(defaultAddresss);
      }

      this.defaultAddress = this.dataservice.getdefaultaddress();

      // Subscribe to changes in the default address
      this.dataservice.defaultAddressChanged.subscribe((address) => {
        this.defaultAddress = address;
        this.cdr.detectChanges(); // Notify change detection system
        console.log("check changing part of the code",this.defaultAddress);
      });
    })
  }




  naviagtetoorders() {
    this.route.navigate(['/account/order'])
  }



  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  navigateto(path: any) {
    this.isnavbarcontentisopen = !this.isnavbarcontentisopen;

  }
  navigatetocart() {

    this.route.navigate(['/cart'])
  }

  navigatetoprofile() {

    this.route.navigate(['/profile'])
  }





  opennavbarcontent(section: any) {
    this.isnavbarcontentisopen = true;
    this.currentsection = section;
  }

  closenavbarcontent() {
    this.isnavbarcontentisopen = false;
  }

  handleLogout = () => {
    this.userService.logout();
    window.location.reload();
  }



  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const modelContainer = document.querySelector('.modal-container');
    const openButtons = document.querySelectorAll('.open-button');
    let clickInsideButton = false;

    openButtons.forEach((button: Element) => {
      if (button.contains(event.target as Node)) {
        clickInsideButton = true;
      }
    });

    if (modelContainer && !clickInsideButton && this.isnavbarcontentisopen) {
      this.closenavbarcontent();
    }
  }
  closeAuthDialog() {

    const authDialogRef = this.dialog.getDialogById('auth-dialog');
    if (authDialogRef) {
      authDialogRef.close();
    }
  }
  handleOpenLoginModal = () => {
    this.dialog.open(AuthComponent, {
      disableClose: false,
      width: "400px",
      id: 'auth-dialog'

    })
  }

  handleOpenAddressModal = () => {

    this.dialog.open(AddressComponent, {
      disableClose: false,
      width: "400px",
    })
  }
}
