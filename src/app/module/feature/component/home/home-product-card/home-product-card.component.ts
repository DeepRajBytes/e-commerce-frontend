import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-product-card',
  templateUrl: './home-product-card.component.html',
  styleUrls: ['./home-product-card.component.scss']
})
export class HomeProductCardComponent {
   @Input() product: any;
   constructor(private route:Router){}
    
    details(id:any){
    this.route.navigate([`product-details/${id}`])
   }
}
