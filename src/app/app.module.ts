import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './module/shared/shared.module'
import { AdminModule } from './module/admin/admin.module';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from './module/auth/auth.module';
import { authReducer } from './state/auth/auth.reducer';
import { userReducer } from './state/user/user.reducer';
import { HttpClientModule } from '@angular/common/http';
import { productReducer } from './state/product/product.reducer';
import { OrderReducer } from './state/orders/order.reducer';
import { FeatureModule } from './module/feature/feature.module';
import { cartReducer } from './state/cart/cart.reducer';
import { UpdateModule } from './module/update/update.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,

    // made module 
    FeatureModule,
    SharedModule,
    AdminModule,
    AuthModule,
    UpdateModule,
    HttpClientModule,
    StoreModule.forRoot({
      auth: authReducer,
      user: userReducer,
      product: productReducer,
      order: OrderReducer,
      cart: cartReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
