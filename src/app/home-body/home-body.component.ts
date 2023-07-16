import { Component } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent {
  a=3;
  b=5;
  ans=15;

  constructor(private dataService: GeneralServiceService) {
    this.dataService.dummyFunc();
    this.multiply(this.a, this.b);
  }

  multiply(a: number, b: number): number {
    return a*b;
  }
}
