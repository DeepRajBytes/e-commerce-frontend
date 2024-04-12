import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';
import { orderService } from 'src/app/state/orders/order.service';
import { Clipboard } from '@angular/cdk/clipboard'
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit{
ordercart:any
id:any
trackingId: string = ''; 
constructor(private route: ActivatedRoute , private orderService : orderService , private store : Store<AppState> , private clipboard: Clipboard , private snackBar: MatSnackBar) {}


ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.id = params['id'];
    if (this.id) {
      this.orderService.getOrderById(this.id);
    }
  });

  this.store.pipe(select(store => store.order)).subscribe((order) => {
    this.ordercart = order?.order;
    console.log("Order details:", order?.order);
  });
  if (!this.trackingId) {
    this.trackingId = this.generateTrackingId();
  }
}

steps = [
  {id:0,title:"PLACED" , isCompleted : true},
  {id:1,title:"CONFIRMED" , isCompleted : true},
  {id:2,title:"SHIPPED" , isCompleted : false},
  {id:3,title:"DELIVERD" , isCompleted : false},
]
copyPaymentId( paymentId:any) {
  // const paymentId = this.ordercart.paymentDetails.paymentid;
  this.clipboard.copy(paymentId);
 
  this.snackBar.open('Payment ID copied to clipboard!', 'Dismiss', {
    duration: 1500, 
  });
}
generateTrackingId(): string {
  // Generate a random 10-digit tracking ID
  const randomId = Math.floor(1000000000 + Math.random() * 9000000000);
  return randomId.toString();
}

}


