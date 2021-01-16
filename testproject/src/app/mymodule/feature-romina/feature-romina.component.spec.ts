import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureRominaComponent } from './feature-romina.component';

describe('FeatureRominaComponent', () => {
  let component: FeatureRominaComponent;
  let fixture: ComponentFixture<FeatureRominaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureRominaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureRominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
