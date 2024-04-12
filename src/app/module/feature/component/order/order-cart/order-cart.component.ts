import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.scss']
})
export class OrderCartComponent {

  @Input() ordercart:any
  

  constructor(private route:Router){
    
  }
  
  navigateto(id:any){
    
    this.route.navigate([`/order/${id}`])
}}
