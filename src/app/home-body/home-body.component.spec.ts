import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBodyComponent } from './home-body.component';
import { GeneralServiceService } from '../general-service.service';

describe('HomeBodyComponent', () => {
  let component: HomeBodyComponent;
  let service: GeneralServiceService;
  let fixture: ComponentFixture<HomeBodyComponent>;

  beforeEach(() => {
    console.log('beforeEach is called!');
    TestBed.configureTestingModule({
      declarations: [HomeBodyComponent],
      providers: [GeneralServiceService]
    });
    service = TestBed.inject(GeneralServiceService);
    fixture = TestBed.createComponent(HomeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it(); -- normal test case
  // fit(); -- focused test case
  // xit(); -- to hault/ignore

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should multiply', () => {
    const result = component.multiply(3, 5);
    expect(result).toBe(15);
  })

  it('should have a value of 3', () => {
    const val = component.a;
    expect(val).toBe(3);
  })

  it('should not have a value of 5', () => {
    const val = component.a;
    expect(val).not.toBe(5);
  })

  it('should call dummyFunc()', () => {
    spyOn(service, "dummyFunc");
    const test = service.dummyFunc();
    expect(service.dummyFunc).toHaveBeenCalled();
  })

  it('should call multiply()', () => {
    spyOn(component, "multiply");
    const res = component.multiply(3, 5);
    expect(component.multiply).toHaveBeenCalled();
  })

});
