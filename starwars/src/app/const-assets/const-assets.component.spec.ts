import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstAssetsComponent } from './const-assets.component';

describe('ConstAssetsComponent', () => {
  let component: ConstAssetsComponent;
  let fixture: ComponentFixture<ConstAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstAssetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
