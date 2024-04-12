import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartitemComponent } from './cartitem.component';

describe('CartitemComponent', () => {
  let component: CartitemComponent;
  let fixture: ComponentFixture<CartitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
