import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuracyComponent } from './accuracy.component';

describe('AccuracyComponent', () => {
  let component: AccuracyComponent;
  let fixture: ComponentFixture<AccuracyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccuracyComponent]
    });
    fixture = TestBed.createComponent(AccuracyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
