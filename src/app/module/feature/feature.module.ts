import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { MainCarasoulComponent } from './component/home/main-carasoul/main-carasoul.component';
import { HomeProductCardComponent } from './component/home/home-product-card/home-product-card.component';
import { ProductSliderComponent } from './component/home/product-slider/product-slider.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { ProductComponent } from './component/product/product.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './component/cart/cart.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentSuccessComponent } from './component/payment-success/payment-success.component';
import { OrderComponent } from './component/order/order.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';
import { ReviewComponent } from './component/product-details/review/review.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AddressformComponent } from './component/checkout/addressform/addressform.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OrderCartComponent } from './component/order/order-cart/order-cart.component';
import { ProfileComponent } from './component/profile/profile.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { WishlistComponent } from './component/wishlist/wishlist.component';




@NgModule({
  declarations: [
    HomeComponent,
    MainCarasoulComponent,
    HomeProductCardComponent,
    ProductSliderComponent,
    ProductComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    OrderComponent,
    OrderDetailsComponent,
    ReviewComponent,
    AddressformComponent,
    OrderCartComponent,
    ProfileComponent,
    WishlistComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    SharedModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule ,
    ClipboardModule,
    MatSnackBarModule,
  ],
  exports:[
    HomeComponent,
    MainCarasoulComponent,
    HomeProductCardComponent,
    ProductSliderComponent,
    ProductComponent
    
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ]
})
export class FeatureModule { }
