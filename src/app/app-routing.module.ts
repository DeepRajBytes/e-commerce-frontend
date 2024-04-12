import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/feature/component/home/home.component';
import { ProductComponent } from './module/feature/component/product/product.component';
import { CartComponent } from './module/feature/component/cart/cart.component';
import { ProductDetailsComponent } from './module/feature/component/product-details/product-details.component';
import { CheckoutComponent } from './module/feature/component/checkout/checkout.component';
import { PaymentComponent } from './module/feature/component/payment/payment.component';
import { PaymentSuccessComponent } from './module/feature/component/payment-success/payment-success.component';
import { OrderComponent } from './module/feature/component/order/order.component';
import { OrderDetailsComponent } from './module/feature/component/order-details/order-details.component';
import { ProfileComponent } from './module/feature/component/profile/profile.component';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./module/admin/admin-routing.module').then(m => m.AdminRoutingModule)
  },
  
  {path:'',component:HomeComponent},
  
  {path:'cart',component:CartComponent},
  {path:'product-details/:id',component:ProductDetailsComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'checkout/payment/:id',component:PaymentComponent},
  {path:':lavelOne/:lavelTwo/:lavelThree',component:ProductComponent},
  {path:'payment',component:PaymentComponent},
  {path:'payment-success',component:PaymentSuccessComponent},
  {path:'account/order',component:OrderComponent},
  {path:'order/:id',component:OrderDetailsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'payment-success', component:PaymentSuccessComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
