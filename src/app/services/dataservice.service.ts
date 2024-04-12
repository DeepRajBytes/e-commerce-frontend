import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private relatedProductData: any =[];

  constructor() { }

  setRelatedProductData(data: any) {
    this.relatedProductData = data;
  }

  getRelatedProductData() {

    return this.relatedProductData;
  }
}
