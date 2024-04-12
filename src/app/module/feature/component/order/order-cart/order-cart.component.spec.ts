import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCartComponent } from './order-cart.component';

describe('OrderCartComponent', () => {
  let component: OrderCartComponent;
  let fixture: ComponentFixture<OrderCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
