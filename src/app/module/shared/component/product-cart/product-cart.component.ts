import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { ProductService } from 'src/app/state/product/product.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent {
@Input() product:any;

data:any
constructor(private route: Router , private productSerivce : ProductService ,private store:Store<AppState> , private dataSerivce : DataserviceService) {}

async navigate(category:any){
   await this.productSerivce.findproductbyParticularcategory({category})

  this.store.pipe(select(store => store.product)).subscribe((product) => {
    this.data = product?.products?.content; 
    
  })
  this.dataSerivce.setRelatedProductData(this.data);
  this.route.navigate([`product-details/${this.product._id}`])
  
}
}