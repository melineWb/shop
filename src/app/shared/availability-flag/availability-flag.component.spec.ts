import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityFlagComponent } from './availability-flag.component';

describe('AvailabilityFlagComponent', () => {
  let component: AvailabilityFlagComponent;
  let fixture: ComponentFixture<AvailabilityFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabilityFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
