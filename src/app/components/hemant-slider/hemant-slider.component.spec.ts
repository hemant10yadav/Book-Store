import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemantSliderComponent } from './hemant-slider.component';

describe('HemantSliderComponent', () => {
  let component: HemantSliderComponent;
  let fixture: ComponentFixture<HemantSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HemantSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HemantSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
