import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetdetailsComponent } from './planetdetails.component';

describe('PlanetdetailsComponent', () => {
  let component: PlanetdetailsComponent;
  let fixture: ComponentFixture<PlanetdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
