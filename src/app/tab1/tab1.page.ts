import { TaskService } from './../../services/task.service';
import { Component } from '@angular/core';
import TaskModel from 'src/models/task';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private taskService: TaskService) {}

  description: string = '';
  tasks: TaskModel[] = [];

  ngOnInit() {
    this.getTasks();
  }

  async addTask() {
    let task = new TaskModel(this.description);
    this.tasks.push(task);
    this.taskService.addTask(task).subscribe((response) => {
    });
  }

  getTasks() {
    this.taskService.getTasks().subscribe((response) => {
      this.tasks = response;
    });
  }

  deleteTask(task: TaskModel) {
    this.tasks = this.tasks.filter((x) => x.id !== task.id);
  }

  completeTask(task: TaskModel) {
    const index = this.tasks.findIndex((x) => x.id === task.id);
    this.tasks[index].complete();
  }
}
