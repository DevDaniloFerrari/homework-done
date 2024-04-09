import { TaskService } from './../../services/task.service';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import TaskModel from 'src/models/task';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private taskService: TaskService, public toastCtrl: ToastController) {}

  description: string = '';
  tasks: TaskModel[] = [];

  ngOnInit() {
    this.getTasks();
  }

  async openToast() {  
    const toast = await this.toastCtrl.create({  
      message: 'You can\'t add empty task!',  
      duration: 3000,
      color: 'warning'
    });  
    toast.present();  
  }  

  async addTask() {
    if(this.description === ''){
      await this.openToast();
      return
    }

    let task = new TaskModel(this.description);
    this.description = ''
    this.taskService.addTask(task).subscribe((response) => {
      this.getTasks();
    });
  }

  getTasks() {
    this.taskService.getTasks().subscribe((response) => {
      this.tasks = response.filter((x) => !x.isDone).map((task) => TaskModel.createModel(task));
    });
  }

  deleteTask(task: TaskModel) {
    this.taskService.deleteTask(task.id!).subscribe((response) => {
      this.tasks = this.tasks.filter((x) => x.id !== task.id);
    });
  }

  completeTask(task: TaskModel) {
    const index = this.tasks.findIndex((x) => x.id === task.id);
    this.tasks[index].complete();
    this.taskService.updateTask(task).subscribe((response) => {
      this.tasks = this.tasks.filter((x) => !x.isDone);
    });
  }
}
