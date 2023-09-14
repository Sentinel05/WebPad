import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css'],
})
export class HomeBodyComponent implements OnInit {
  // a=3;
  // b=5;
  // ans=15;
  tasks: any = [];

  @ViewChild('addtask') addtaskInput!: ElementRef;

  constructor(private dataService: GeneralServiceService) {
    // this.dataService.dummyFunc();
    // this.multiply(this.a, this.b);
  }

  ngOnInit() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  newTask(task: string) {
    if (task != '') {
      const uniqueId = uuidv4();
      this.tasks.push({ id: uniqueId, title: task });
    }
    this.addtaskInput.nativeElement.value = '';
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((item: { id: number }) => {
      return item.id != id;
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  clearAll() {
    this.tasks = [];
    localStorage.removeItem('tasks');
  }

  // multiply(a: number, b: number): number {
  //   return a*b;
  // }
}
