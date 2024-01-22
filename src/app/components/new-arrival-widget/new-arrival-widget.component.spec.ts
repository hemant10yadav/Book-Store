import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrivalWidgetComponent } from './new-arrival-widget.component';

describe('NewArrivalWidgetComponent', () => {
  let component: NewArrivalWidgetComponent;
  let fixture: ComponentFixture<NewArrivalWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArrivalWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewArrivalWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
