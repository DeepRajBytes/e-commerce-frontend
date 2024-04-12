import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NavContentComponent } from './component/navbar/nav-content/nav-content.component';
import { FooterComponent } from './component/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCartComponent } from './component/product-cart/product-cart.component';
import { StarComponent } from './component/star/star.component';
import { CartitemComponent } from './component/cartitem/cartitem.component';
import { AddressCartComponent } from './component/address-cart/address-cart.component';
import { StaperComponent } from './component/staper/staper.component';
import { MatDialogModule } from '@angular/material/dialog';

 
@NgModule({
  declarations: [
    NavbarComponent,
    NavContentComponent,
    FooterComponent,
    ProductCartComponent,
    StarComponent,
    CartitemComponent,
    AddressCartComponent,
    StaperComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatDialogModule
   
  ],
  exports:[
    NavbarComponent,
    NavContentComponent,
    FooterComponent,
    ProductCartComponent,
    StarComponent,
    CartitemComponent,
    AddressCartComponent,
    StaperComponent
  ]
})
export class SharedModule { }
