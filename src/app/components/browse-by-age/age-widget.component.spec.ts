import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeWidgetComponent } from './age-widget.component';

describe('BrowseByAgeComponent', () => {
  let component: AgeWidgetComponent;
  let fixture: ComponentFixture<AgeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
