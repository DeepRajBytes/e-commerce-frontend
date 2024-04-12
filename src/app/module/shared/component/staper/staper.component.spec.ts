import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaperComponent } from './staper.component';

describe('StaperComponent', () => {
  let component: StaperComponent;
  let fixture: ComponentFixture<StaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
