import { Component , Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/state/cart/cart.service';
import { ProductService } from 'src/app/state/product/product.service';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.scss']
})
export class CartitemComponent implements OnInit,OnChanges{
  @Input() cartItem:any

  @Input() showbutton:any = false
  constructor(private route:Router,private productService: ProductService,private cartService : CartService ,){}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.quantity > 1) {
      window.location.reload()
    }
  }



  ngOnInit(): void {}

  getbackproduct(id:any){
    this.productService.findProductById(id)
    this.route.navigate([`product-details/${id}`])
   }


quantity:number = 1;

removeitem() {
this.cartService.removeCartItem(this.cartItem._id);
// window.location.reload();
}

updatecartitem(num: number) {
  this.quantity += num; 
  if (this.quantity < 1) {
    this.quantity = 1; 
  }
  this.cartService.updateCartItem({
    cartItemId : this.cartItem._id,
    data: {quantity : num + this.cartItem.quantity}
  })
  // window.location.reload();
}
}