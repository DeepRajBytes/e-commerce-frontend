import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private relatedProductData: any =[];
  private defaultaddress:any

  defaultAddressChanged: Subject<any> = new Subject<any>();

  constructor() { }

  setRelatedProductData(data: any) {
    // console.log("data is ", data)
    this.relatedProductData = data;
  }

  getRelatedProductData() {

    return this.relatedProductData;
  }

  setdefaultaddress(data:any){
    
    this.defaultaddress = data  
    console.log("default data is ",this.defaultaddress);
  }
  getdefaultaddress(){
    return this.defaultaddress;
  }
}
