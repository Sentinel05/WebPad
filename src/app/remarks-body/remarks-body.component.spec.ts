import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarksBodyComponent } from './remarks-body.component';

describe('RemarksBodyComponent', () => {
  let component: RemarksBodyComponent;
  let fixture: ComponentFixture<RemarksBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemarksBodyComponent]
    });
    fixture = TestBed.createComponent(RemarksBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
