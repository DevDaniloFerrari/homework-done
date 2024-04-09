import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() childEvent = new EventEmitter();

  deleteTask(){
    this.childEvent.emit(this.task);
  }

}
