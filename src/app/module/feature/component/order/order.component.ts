import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';
import { orderService } from 'src/app/state/orders/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
  orders: any;
  

constructor(private store:Store<AppState> , private orderService : orderService , private activeRoute : ActivatedRoute){}

ngOnInit(): void {
 this.orderService.getOrderHistory()

 this.store.pipe(select(store=>store.order)).subscribe((order)=>{
  
  this.orders = order?.orders || []
  
 })
  
}

orderfilter: any=[
  {value:'on_the_way',label:'on the way'},
  {value:'Deliverd',label:'Deliverd'},
  {value:'Canceled',label:'Canceled'},
  {value:'return',label:'Returned'},
];
}

