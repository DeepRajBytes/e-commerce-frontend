import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent {
  maxRating = 5;
  initialRating = 3;
  currentRating = 0;
  stars: any;

  constructor() {
    this.stars = Array(this.maxRating).fill(0).map((_, index) => index + 1);
    this.rate(this.initialRating); 
  }

  rate(rating: any) {
    this.currentRating = rating;
  }
}
