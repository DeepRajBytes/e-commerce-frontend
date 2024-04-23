// import { Component, OnInit } from '@angular/core';
// import { filters, singlefilters } from './filterdata';
// import { mensPantsPage1 } from 'src/ecommerce-products-data-master/pants/men_page1';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ProductService } from 'src/app/state/product/product.service';
// import { select, Store } from '@ngrx/store';
// import { AppState } from 'src/app/models/Appstate';

// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.scss']
// })
// export class ProductComponent implements OnInit{
//   filterdata:any
//   singlefilter:any
//   products:any
//   menpants:any
//   showFilters: boolean = false;
//   lavelThree: any;


//   constructor(private router:Router,
//     private activeroute:ActivatedRoute,
//     private productService : ProductService,
//     private store : Store<AppState>
//     ){}


//   toggleFilters() {
//     console.log(this.showFilters);
//     this.showFilters = !this.showFilters;
    
//   }
  
//   ngOnInit(): void {
//    this.filterdata = filters
//    this.singlefilter =singlefilters
//    this.menpants =  mensPantsPage1

//    this.activeroute.paramMap.subscribe(
//     (params)=>{
//       this.lavelThree = params.get('lavelThree') ;
//       var requestData = {
//         category : params.get('lavelThree'),
//         color : [],
//         size : [],
//         minPrice : 0 ,
//         maxPrice : 1000000,
//         minDiscount : 0,
//         pageNumber : 1 ,
//         pageSize : 50 ,
//         stock : null ,

//       }
//       this.productService.findProductByCategory(requestData)
//      });

//     this.activeroute.queryParams.subscribe((params)=>{
//       const color = params["color"];
//       const size = params["size"];
//       const price = params["price"];
//       const discount = params['discount'];
//       const stock = params['stock'];
//       const sort = params['sort'] || 'default_sort_option';
//       const pageNumber = params['pageNumber'];
//       const minPrice = price?.split("-")[0];
//       const maxPrice = price?.split("-")[1];

//       var requestData = {
//         category : this.lavelThree,
//         color : color ? [color].join(","):[],
//         size : size,
//         minPrice : minPrice?minPrice:0 ,
//         maxPrice :maxPrice?maxPrice:20000,
//         minDiscount : discount?discount:0,
//         pageNumber : pageNumber?pageNumber:1,
//         pageSize : 50 ,
//         stock : null ,
//         sort : sort ? sort : "price_low"
//    };
//   console.log("request data is", requestData);
//    this.productService.findProductByCategory(requestData);
    
//     })
    


//   this.store.pipe(select(store=>store.product)).subscribe((product)=>{
//       this.products = product?.products?.content
//       console.log("store ka data",product.products.content)
//     })   
//   }

  
// handlemultipleslesctfilter(value:String,sectionId:string){
//   const queryParams = {...this.activeroute.snapshot.queryParams};
//   const filterValues = queryParams[sectionId] ? queryParams[sectionId].split(",") : [];
//   const valueindex = filterValues.indexOf(value);

//     if(valueindex != -1){
//       filterValues.splice(valueindex,1)
//     }
//     else
//     {
//       filterValues.push(value);
//     }

//     if(filterValues.length>0){
//       queryParams[sectionId] =  filterValues.join(",")
//     }
//     else{
//       delete queryParams[sectionId];
//     }
//     this.router.navigate([],{queryParams});
// }
// handlesinglefiltersection(value:string,sectionId:string){
//   const queryParams = {...this.activeroute.snapshot.queryParams};
//   queryParams[sectionId] =  value;
//   this.router.navigate([],{queryParams})
  
// }
// }

import { Component, OnInit} from '@angular/core';
import { filters, singlefilters } from './filterdata';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/state/product/product.service';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/Appstate';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  filterdata: any;
  singlefilter: any;
  products: any;
  menpants: any;
  showFilters: boolean = false;
  lavelThree: any;
  currentPage: number = 1;
  productsPerPage: number = 9;
  totalPages: number =10 ;

  

  constructor(private router: Router,
    private activeroute: ActivatedRoute,
    private productService: ProductService,
    private store: Store<AppState>
  ) { }

  toggleFilters() {
    
    this.showFilters = !this.showFilters;

  }

  ngOnInit(): void {
    this.filterdata = filters;
    this.singlefilter = singlefilters;
    

    this.activeroute.paramMap.subscribe(
      (params) => {
        this.lavelThree = params.get('lavelThree');
        var requestData = {
          category: params.get('lavelThree'),
          color: [],
          size: [],
          minPrice: 0,
          maxPrice: 1000000,
          minDiscount: 0,
          pageNumber: 1,
          pageSize: 50,
          stock: null,

        }
        this.productService.findProductByCategory(requestData)
      });

    this.activeroute.queryParams.subscribe((params) => {
      const color = params["color"];
      const size = params["size"];
      const price = params["price"];
      const discount = params['discount'];
      const stock = params['stock'];
      const sort = params['sort'] || 'default_sort_option';
      const pageNumber = params['pageNumber'];
      const minPrice = price?.split("-")[0];
      const maxPrice = price?.split("-")[1];

      var requestData = {
        category: this.lavelThree,
        color: color ? [color].join(",") : [],
        size: size,
        minPrice: minPrice ? minPrice : 0,
        maxPrice: maxPrice ? maxPrice : 20000,
        minDiscount: discount ? discount : 0,
        pageNumber: pageNumber ? pageNumber : 1,
        pageSize: 50,
        stock: null,
        sort: sort ? sort : "price_low"
      };
      // console.log("request data is", requestData);
      this.productService.findProductByCategory(requestData);

    })

    this.store.pipe(select(store => store.product)).subscribe((product) => {
      // console.log("product",product);
      
      this.products = product?.products?.content;
      this.totalPages = product?.products?.totalPages;
    });
  }

  getDisplayedProducts(): any[] {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    const endIndex = startIndex + this.productsPerPage;
    return this.products?.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  handlemultipleslesctfilter(value: String, sectionId: string) {
    const queryParams = { ...this.activeroute.snapshot.queryParams };
    const filterValues = queryParams[sectionId] ? queryParams[sectionId].split(",") : [];
    const valueindex = filterValues.indexOf(value);
  
    if (valueindex != -1) {
      filterValues.splice(valueindex, 1)
    }
    else {
      filterValues.push(value);
    }

    if (filterValues.length > 0) {
      queryParams[sectionId] = filterValues.join(",")
    }
    else {
      delete queryParams[sectionId];
    }
    this.router.navigate([], { queryParams });
  }

  handlesinglefiltersection(value: string, sectionId: string) {
    const queryParams = { ...this.activeroute.snapshot.queryParams };
    queryParams[sectionId] = value;
    this.router.navigate([], { queryParams })

  }

  get showPreviousButton(): boolean {
    return this.currentPage > 1;
}

get showNextButton(): boolean {
    return this.currentPage < this.totalPages;
}

}
