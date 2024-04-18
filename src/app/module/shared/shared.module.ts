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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAddressComponent } from './component/address/add-address/add-address.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';

 
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
    AddAddressComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
   
   
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
