import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipdetailsComponent } from './starshipdetails.component';

describe('StarshipdetailsComponent', () => {
  let component: StarshipdetailsComponent;
  let fixture: ComponentFixture<StarshipdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
