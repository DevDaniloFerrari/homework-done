import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  newTask: string = '';
  tasks: string[] = ['task 1', 'task 2', 'task 3'];

  addTask() {
    this.tasks.push(this.newTask);
  }
}
