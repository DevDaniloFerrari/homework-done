export default class TaskModel {
  #id?: string;
  #description?: string;
  #isDone: boolean;

  constructor(description?: string, isDone?: boolean, id?: string) {
    this.#description = description;
    this.#isDone = isDone || false;
    this.#id = id;
  }

  get id() {
    return this.#id;
  }

  get description() {
    return this.#description;
  }

  get isDone() {
    return this.#isDone;
  }

  complete() {
    this.#isDone = true;
  }

  toObject() {
    return {
      id: this.#id,
      description: this.#description,
      isDone: this.#isDone,
    };
  }

  static createModel(task: any) {
    return new TaskModel(task.description, task.isDone, task.id);
  }
}
