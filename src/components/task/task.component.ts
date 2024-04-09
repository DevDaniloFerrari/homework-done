import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import TaskModel from 'src/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() task: TaskModel = new TaskModel();
  @Input() readonly: boolean = false;

  @Output() deleteTaskEvent = new EventEmitter();
  @Output() completeTaskEvent = new EventEmitter();

  deleteTask() {
    this.deleteTaskEvent.emit(this.task);
  }

  completeTask() {
    this.completeTaskEvent.emit(this.task);
  }
}
