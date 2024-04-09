import { Component } from '@angular/core';
import TaskModel from 'src/models/task';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  description: string = '';
  tasks: TaskModel[] = [new TaskModel(1, 'task 1'), new TaskModel(2, 'task 2'), new TaskModel(3, 'task 3')];

  addTask() {
    this.tasks.push(new TaskModel(this.tasks.length + 1, this.description));
  }
}
