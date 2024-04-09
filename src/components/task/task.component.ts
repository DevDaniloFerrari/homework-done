import { Component, Input, OnInit } from '@angular/core';
import TaskModel from 'src/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() task: TaskModel = new TaskModel();

  deleteTask() {
      
  }

}
