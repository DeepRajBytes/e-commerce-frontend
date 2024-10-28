
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';
import { CartService } from 'src/app/state/cart/cart.service';
import { ProductService } from 'src/app/state/product/product.service';

import Swal from 'sweetalert2';
import { AuthComponent } from 'src/app/module/auth/auth.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { AddReviewComponent } from 'src/app/module/shared/component/add-review/add-review.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  
  selectedsize: any;
  relatedproduct:any 
  product: any;
  productId : any;
  currentImageUrl : string = '';

  constructor(private snackBar: MatSnackBar,private dialog: MatDialog, private route: Router, private productService: ProductService, private activeRoute: ActivatedRoute, private store: Store<AppState>, private cartService: CartService , private dataService: DataserviceService) {}

  ngOnInit(): void {
    
  const id = this.activeRoute.snapshot.paramMap.get("id")
     this.productService.findProductById(id);
    this.productId = id
     this.store.pipe(select(store => store.product)).subscribe((product) => {
      this.product = product?.product
      this.currentImageUrl = this.product.imageUrl;
      // console.log("product ye hai  chekc kar", this.product)
    }) 
    
    
  //   this.store.pipe(select(store => store.product)).subscribe((product) => {
  //     console.log("product",product);
      
  //     this.relatedproduct = product?.products?.content.filter((item: any) => item._id !== this.productId);
  // })
    
    this.fetchRelatedProducts();
   }


   selectColor(image: any): void {
    this.currentImageUrl = image.urls;
}


  async fetchRelatedProducts() {
     this.relatedproduct = this.dataService.getRelatedProductData().filter((item: any) => item._id !== this.productId);;
     console.log('Related Products:', this.relatedproduct);
    }

  reload(id:any){
    // console.log("click par yeh ", id);
    // this.route.navigate([`product-details/${id._id}`])
    window.location.reload();
  }

  handleOpenLoginModal() {
    this.dialog.open(AuthComponent, {
      disableClose: false,
      width: "400px",
    });
  }

  handleOpenReviewModal=()=> {
      
    this.dialog.open(AddReviewComponent,{
      disableClose:false,
      width:"400px",
      data: { productId: this.productId  , product : this.product }
       })
    }

  async handleAddToCart() {

    const token = localStorage.getItem('JWT');
    if (token === null) {
      this.dialog.open(AuthComponent, {
        disableClose: false,
        width: '550px',
        id: 'auth-dialog',
      });
      // await Swal.fire({
      //   icon: 'error',
      //   title: 'Please Login to Become Fashion iCon',
      //   showCancelButton: true,
      //   showConfirmButton: true,
      //   confirmButtonText: 'Login',
      //   cancelButtonText: 'Cancel',
      //   preConfirm: () => {
      //     this.handleOpenLoginModal();
      //   }
      // });
      return;
    }

    const data = { size: this.selectedsize, productId: this.productId ,color:this.selectColor}
    this.cartService.additemTocart(data);

    this.snackBar.open('Item Added To Cart', 'Dismiss', {
      duration: 2000, 
    })

    // this.cartService.getCart()

  }
 
  async handleAddToBuy() {

    const token = localStorage.getItem('JWT');
    if (!token) {
      await Swal.fire({
        icon: 'error',
        title: 'Please Login to Become Fashion iCon',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Login',
        cancelButtonText: 'Cancel',
        preConfirm: () => {
          this.handleOpenLoginModal();
        }
      });
      return; 
    }
    // console.log("that is the color",this.selectColor)
    const data = { size: this.selectedsize, productId: this.productId  }
    this.cartService.additemTocart(data);

  
    await this.cartService.getCart()

    this.route.navigate(['/cart']);
    
  }
}





// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { select, Store } from '@ngrx/store';
// import { AppState } from 'src/app/models/Appstate';
// import { CartService } from 'src/app/state/cart/cart.service';
// import { ProductService } from 'src/app/state/product/product.service';
// import { mensShoesPage1 } from 'src/ecommerce-products-data-master/shoes';
// import Swal from 'sweetalert2';
// import { AuthComponent } from 'src/app/module/auth/auth.component';
// import { MatDialog } from '@angular/material/dialog';


// @Component({
//   selector: 'app-product-details',
//   templateUrl: './product-details.component.html',
//   styleUrls: ['./product-details.component.scss']
// })
// export class ProductDetailsComponent implements OnInit{

// selectedsize: any;
// reviews = [1,2,3,];
// relatedproduct:any;
// product: any;
// productId : any;
// handleOpenLoginModal:any

// constructor(private dialog : MatDialog,private route:Router , private productService : ProductService , private activeRoute : ActivatedRoute , private store : Store<AppState> , private cartService : CartService ){}


// ngOnInit(): void {
//   this.relatedproduct = mensShoesPage1.slice(0,8)
//   const id = this.activeRoute.snapshot.paramMap.get("id")
//   this.productService.findProductById(id);
//   this.productId = id

//   this.store.pipe(select(store=>store.product)).subscribe((product)=>{
//     this.product = product?.product
//     // console.log("store ka data",product.product)
//   })   

// }

// async handleAddToCart(){
// // console.log("selected size",this.selectedsize);
// const token = localStorage.getItem('JWT');
// if (!token) {
//   await Swal.fire({
//     icon: 'error',
//     title: 'Please Login to Become Fashion iCon',
//     showCancelButton: true,
//     showConfirmButton: true,
//     confirmButtonText: 'Login',
//     cancelButtonText: 'Cancel',
//     preConfirm: () => {
      
//       this.handleOpenLoginModal();
//     }
    
//   });
  
//   this.route.navigate(['/']);
//   return; 
// }


// const data = {size : this.selectedsize , productId : this.productId}

// this.cartService.additemTocart(data);

// await Swal.fire({
//   icon: 'success',
//   title: 'Item Added to Cart',
//   showConfirmButton: false,
//   timer: 1500 
// });

// this.cartService.getCart()

// setTimeout(() => {
//   this.route.navigate(['/cart']);
// }, 1500);
// }
// handleOpenLoginModal = () => {
//   this.dialog.open(AuthComponent, {
//     disableClose: false,
//     width: "400px",
//   });
// }


// }