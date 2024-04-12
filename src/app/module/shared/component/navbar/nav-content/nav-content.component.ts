import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';



import { navigation } from 'src/ecommerce-products-data-master/navigation';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss']
})
export class NavContentComponent implements OnInit{

  category: any;
@Input() selectedSection: any;


ngOnInit(): void {
  this.category = navigation;
}
constructor(private router : Router){}

handleNavigate = (path:any) =>{
  this.router.navigate([path])
}

}
