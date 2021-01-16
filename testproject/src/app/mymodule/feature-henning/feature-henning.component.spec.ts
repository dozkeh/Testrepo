import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureHenningComponent } from './feature-henning.component';

describe('FeatureHenningComponent', () => {
  let component: FeatureHenningComponent;
  let fixture: ComponentFixture<FeatureHenningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureHenningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureHenningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
