import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import TaskModel from 'src/models/task';
import { TaskService } from 'src/services/task.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(private taskService: TaskService, private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.getTasks();
      }
    });
  }

  tasks: TaskModel[] = [];

  getTasks() {
    this.taskService.getTasks().subscribe((response) => {
      this.tasks = response
        .filter((x) => x.isDone)
        .map((task) => TaskModel.createModel(task));
    });
  }
}
