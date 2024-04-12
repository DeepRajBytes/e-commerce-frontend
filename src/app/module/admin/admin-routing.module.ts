import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { OrdertableComponent } from './component/ordertable/ordertable.component';
import { AdminproductsComponent } from './component/adminproducts/adminproducts.component';
import { CustomersComponent } from './component/customers/customers.component';
import { AddproductsComponent } from './component/addproducts/addproducts.component';

const routes: Routes = [
  {
    path:'',component:AdminComponent , children:[
      {path:'',component:DashboardComponent},
      {path:'orders',component:OrdertableComponent},
      {path:'products',component:AdminproductsComponent},
      {path:'customers',component:CustomersComponent},
      {path:'addproduct',component:AddproductsComponent}
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
