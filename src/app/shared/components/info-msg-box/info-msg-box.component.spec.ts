import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMsgBoxComponent } from './info-msg-box.component';

describe('InfoMsgBoxComponent', () => {
  let component: InfoMsgBoxComponent;
  let fixture: ComponentFixture<InfoMsgBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMsgBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMsgBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
