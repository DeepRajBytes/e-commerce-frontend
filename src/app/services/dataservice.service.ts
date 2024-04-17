import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private relatedProductData: any =[];

  constructor() { }

  setRelatedProductData(data: any) {
    // console.log("data is ", data)
    this.relatedProductData = data;
  }

  getRelatedProductData() {

    return this.relatedProductData;
  }
}
