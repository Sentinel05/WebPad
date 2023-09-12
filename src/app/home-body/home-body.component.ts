import { Component } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css'],
})
export class HomeBodyComponent {
  // a=3;
  // b=5;
  // ans=15;
  tasks: any = [];

  constructor(private dataService: GeneralServiceService) {
    // this.dataService.dummyFunc();
    // this.multiply(this.a, this.b);
  }

  newTask(task: string) {
    if (task != '') {
      this.tasks.push({ id: this.tasks.length, title: task });
      console.log(this.tasks);
    }
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((item: { id: number }) => {
      item.id != id;
    });
  }

  clearAll() {
    this.tasks = [];
  }

  // multiply(a: number, b: number): number {
  //   return a*b;
  // }
}
