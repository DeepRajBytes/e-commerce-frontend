import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent implements OnInit {
  orderId: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Fetch the order ID from query parameters
    this.route.queryParams.subscribe(params => {
      this.orderId = params['token'];
    });
  }

  goToHome() {
    // Navigate back to home page
    this.router.navigate(['/account/order']);
  }
}
