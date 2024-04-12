import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';
import { CartService } from 'src/app/state/cart/cart.service';
import { orderService } from 'src/app/state/orders/order.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{
  paymentHandler: any ;
  id:any
  order:any
  products =[];
  
  constructor(private cartService :CartService,private activetedRouter : ActivatedRoute ,private store:Store<AppState> ,private orderService : orderService, private router:Router){}
 
  ngOnInit(): void {
     this.id = this.activetedRouter.snapshot.paramMap.get("id")
    
    if(this.id){
     this.orderService.getOrderById(this.id);
    }
    this.store.pipe(select(store=>store.order)).subscribe((order)=>{
      // console.log("hee my orders", order);
      this.order = order.order
      console.log("this is set of order",order.order);
    })
    this.invokeStripe();

}




invokeStripe() {
  if (!window.document.getElementById('stripe-script')) {
    const script = window.document.createElement('script');
    script.id = 'stripe-script';
    script.src = 'https://checkout.stripe.com/checkout.js';
    script.onload = () => {
      this.paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51P312RSEbzC1lRyqnlzExwbPsE6B35kD8pyI7pnvNWlrCNGo95e7PjEcsP4TMsVGz6aLdeajqaHgf7SsEvMGHdXE00tEPMfqS1',
        locale: 'auto',
        token: (stripeToken: any) => {
          this.handleStripeToken(stripeToken);
        }
      });
    };
   
    document.body.appendChild(script);
  }
}
handleStripeToken(stripeToken: any) {
  console.log("ye hi to hai stripetoken",stripeToken); 
  this.orderService.updateOrder(this.id ,{paymentid:stripeToken.id , transactionid : stripeToken.card.id , paymentmethod:stripeToken.type});
  this.cartService.deleteCartItem(this.id);
  this.router.navigate(['/payment-success'], { queryParams: { token: stripeToken.id } });
}
makePayment(amount: number) {
  console.log(this.paymentHandler)
  this.paymentHandler.open({
    name: "Deepraj Fashion Store",
    description: "A Fashion Brand",
    amount: amount * 100
  });
}

}
