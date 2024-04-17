import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';
import { ProductService } from 'src/app/state/product/product.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit{
  product : any
  constructor(@Inject(MAT_DIALOG_DATA) public data: { productId: string ,product : any } , private formbuilder : FormBuilder, private productService : ProductService, private store:Store<AppState> ,private dialog : MatDialog) { }

  reviewForm :FormGroup = this.formbuilder.group({
    review :['',[Validators.required]],
    
  })     

  ngOnInit(): void {
    
    this.product = this.data.product
    console.log(this.data.productId); 
    
  }

  submitForm():void{
    if(this.reviewForm.valid){
    // console.log("review data",this.reviewForm.value);
    const reviewdata = this.reviewForm.get("review")?.value
    this.productService.reviewProduct({productId : this.data.productId , review :reviewdata})

    this.store.pipe(select((store)=>store.product)).subscribe((user)=>{
      // this.userProfile = user.message;
      if(user.message){
        this.dialog.closeAll()
        window.location.reload();
      }
    })
    }
  }
 
 

}
