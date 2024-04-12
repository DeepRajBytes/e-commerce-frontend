import { Component, HostListener , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from 'src/app/module/auth/auth.component';
import { Userservice } from 'src/app/state/user/user.service';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  isNavbarOpen: boolean = false
  isnavbarcontentisopen: boolean = false;
  currentsection: any;
  userProfile:any
  

  constructor(private route :Router , private dialog : MatDialog ,private userService:Userservice , private store:Store<AppState>){}
   
  
  
  
  naviagtetoorders(){
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

  ngOnInit(): void {
    if(localStorage.getItem("JWT")) this.userService.getUserProfile()
    
    this.store.pipe(select((store)=>store.user)).subscribe((user)=>{
      this.userProfile = user.userProfile;
      if(user.userProfile){
        this.dialog.closeAll()
      }
    })
  }
  
  
  opennavbarcontent(section:any) {
    this.isnavbarcontentisopen = true;
    this.currentsection = section;
  }

  closenavbarcontent() {
    this.isnavbarcontentisopen = false;
  }

  handleLogout=()=>{
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
  handleOpenLoginModal=()=> {
    this.dialog.open(AuthComponent,{
      disableClose:false,
      width:"400px",
      
    })
    }
}