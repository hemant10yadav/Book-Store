import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseByAgeComponent } from './browse-by-age.component';

describe('BrowseByAgeComponent', () => {
  let component: BrowseByAgeComponent;
  let fixture: ComponentFixture<BrowseByAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseByAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
