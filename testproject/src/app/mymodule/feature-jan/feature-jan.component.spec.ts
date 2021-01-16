import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureJanComponent } from './feature-jan.component';

describe('FeatureJanComponent', () => {
  let component: FeatureJanComponent;
  let fixture: ComponentFixture<FeatureJanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureJanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureJanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
