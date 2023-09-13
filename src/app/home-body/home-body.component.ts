import { Component, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('addtask') addtaskInput!: ElementRef;

  constructor(private dataService: GeneralServiceService) {
    // this.dataService.dummyFunc();
    // this.multiply(this.a, this.b);
  }

  newTask(task: string) {
    if (task != '') {
      this.tasks.push({ id: this.tasks.length, title: task });
    }
    this.addtaskInput.nativeElement.value = '';
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((item: { id: number }) => {
      return item.id != id;
    });
  }

  clearAll() {
    this.tasks = [];
  }

  // multiply(a: number, b: number): number {
  //   return a*b;
  // }
}
