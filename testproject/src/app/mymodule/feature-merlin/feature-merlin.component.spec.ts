import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureMerlinComponent } from './feature-merlin.component';

describe('FeatureMerlinComponent', () => {
  let component: FeatureMerlinComponent;
  let fixture: ComponentFixture<FeatureMerlinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureMerlinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureMerlinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
