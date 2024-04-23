import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';
import { Userservice } from 'src/app/state/user/user.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{
  product:any


  constructor(private store:Store<AppState>,private userService:Userservice){}
  ngOnInit(): void {
  this.userService.wishlist()
  }

}
