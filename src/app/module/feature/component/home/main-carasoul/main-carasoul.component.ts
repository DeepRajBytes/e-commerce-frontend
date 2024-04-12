import { Component, OnInit } from '@angular/core';
import { homeCarouselData } from 'src/ecommerce-products-data-master/mainCarusel';

@Component({
  selector: 'app-main-carasoul',
  templateUrl: './main-carasoul.component.html',
  styleUrls: ['./main-carasoul.component.scss']
})
export class MainCarasoulComponent implements OnInit {
  carouselData: any;
  currentSlide = 0;
  interval: any;

  ngOnInit(): void {
    this.carouselData = homeCarouselData;
    this.autoplay();
  }

  autoplay() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.carouselData.length) % this.carouselData.length;
  }
}
