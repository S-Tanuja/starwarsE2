import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantAssetsComponent } from './constant-assets.component';

describe('ConstantAssetsComponent', () => {
  let component: ConstantAssetsComponent;
  let fixture: ComponentFixture<ConstantAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstantAssetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstantAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
