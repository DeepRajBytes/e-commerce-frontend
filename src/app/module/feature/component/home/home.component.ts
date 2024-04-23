import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';
import { ProductService } from 'src/app/state/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menjeans:any = [];
  menskurta: any = [];
 
  Sweaters: any = [];
  Jackets: any =[];
  

constructor(private productSerivce : ProductService , private store:Store<AppState>){}

  ngOnInit(): void {

    const categories = ["men_jeans", "mens_kurta", "Sweaters", "Jackets"];
    
  categories.forEach(category => {
    this.productSerivce.findproductbyParticularcategory({ category });
  });

 
 this.store.pipe(select(store => store.product)).subscribe((product) => {
 

  if (product && product.products && product.products.content) {
   
    product.products.content.forEach((item: any) => {
      if (item.category.name == 'men_jeans') {
        this.menjeans = [...this.menjeans,item]
        // console.log("item if this is filter", this.menjeans)
       }
       else if(item.category.name == 'mens_kurta'){
        this.menskurta = [...this.menskurta,item]
       }else if(item.category.name == 'Jackets'){
        this.Jackets = [...this.Jackets,item]
       }else if (item.category.name == 'Sweaters'){
        this.Sweaters = [...this.Sweaters,item] 
       }
    });
  } else {
    console.error("Invalid product data:", product);
  }

  
});
   
  };
    
    // this.store.pipe(select(store => store.product)).subscribe((product) => {
    //   console.log(" this is home product", product);
    //   this.menjeans = product?.products?.content;
    //  console.log("this i content", product?.products?.content);
    // })
    // 2
    
    

    
    // this.menskurta = mens_kurta.slice(0,5);
    // this.menshirt = lengha_page1.slice(0, 5);
    // this.womengown = gounsPage1.slice(0,5);
    // this.shoes = mensShoesPage1.slice(0,5);

  }




// const randomStartIndex1 = Math.floor(Math.random() * (menjeans.length - 5));
//     const randomStartIndex2 = Math.floor(Math.random() * (mens_kurta.length - 5));
//     const randomStartIndex3 = Math.floor(Math.random() * (lengha_page1.length - 5));
//     const randomStartIndex4 = Math.floor(Math.random() * (gounsPage1.length - 5));
//     const randomStartIndex5 = Math.floor(Math.random() * (mensShoesPage1.length - 5));