import { Component , Input, OnInit , EventEmitter , Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/state/cart/cart.service';
import { ProductService } from 'src/app/state/product/product.service';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.scss']
})
export class CartitemComponent implements OnInit{
  @Input() cartItem:any
  
  @Output() itemUpdated: EventEmitter<any> = new EventEmitter();

  @Input() showbutton:any = false
  constructor( private route:Router,private productService: ProductService,private cartService : CartService ,){}



  ngOnInit(): void {}

  getbackproduct(id:any){
    this.productService.findProductById(id)
    this.route.navigate([`product-details/${id}`])
   }


quantity:number = 1;

// removeitem() {
// this.cartService.removeCartItem(this.cartItem._id);
// // window.location.reload();
// this.itemUpdated.emit();
// }

removeitem() {
  Swal.fire({
    title: "Are you sure?",
    text: "It may be Out Of Stock Any Time",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      this.cartService.removeCartItem(this.cartItem._id);
      window.location.reload();
    } else if (result.dismiss === Swal.DismissReason.cancel) {
     
      console.log("Item deletion cancelled!");
    }
  });
  this.itemUpdated.emit();
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
  this.itemUpdated.emit();
  // window.location.reload();
  
}
}