import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './component/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { OrdertableComponent } from './component/ordertable/ordertable.component';
import { AdminproductsComponent } from './component/adminproducts/adminproducts.component';
import { CustomersComponent } from './component/customers/customers.component';
import { AddproductsComponent } from './component/addproducts/addproducts.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    OrdertableComponent,
    AdminproductsComponent,
    CustomersComponent,
    AddproductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
