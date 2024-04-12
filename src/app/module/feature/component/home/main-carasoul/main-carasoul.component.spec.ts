import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCarasoulComponent } from './main-carasoul.component';

describe('MainCarasoulComponent', () => {
  let component: MainCarasoulComponent;
  let fixture: ComponentFixture<MainCarasoulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCarasoulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCarasoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
