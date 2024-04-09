import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import TaskModel from 'src/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  #API_URL = 'http://localhost:3000/tasks/'

  addTask(task: TaskModel): Observable<TaskModel> {
    return this.http.post<TaskModel>(this.#API_URL, task.toObject());
  }

  getTasks(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(this.#API_URL);
  }

  deleteTask(id: string): Observable<TaskModel> {
    return this.http.delete<TaskModel>(this.#API_URL+id);
  }

  updateTask(task: TaskModel): Observable<TaskModel> {
    return this.http.put<TaskModel>(this.#API_URL+task.id, task.toObject());
  }
}
