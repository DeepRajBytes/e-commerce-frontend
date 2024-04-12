import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class ProductSliderComponent {
  @Input() title:any
  @Input() products: any;
}
