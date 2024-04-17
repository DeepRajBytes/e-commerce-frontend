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
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoaderComponent } from './component/loader/loader.component';
import { AddressComponent } from './component/address/address.component';
import { AddReviewComponent } from './component/add-review/add-review.component';
import { ReactiveFormsModule } from '@angular/forms';

 
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
    LoaderComponent,
    AddressComponent,
    AddReviewComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
   
  ],
  exports:[
    NavbarComponent,
    NavContentComponent,
    FooterComponent,
    ProductCartComponent,
    StarComponent,
    CartitemComponent,
    AddressCartComponent,
    StaperComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
