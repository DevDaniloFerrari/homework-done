export default class TaskModel {
  #id?: number;
  #description?: string;
  #isDone: boolean;

  constructor(id?: number, description?: string) {
    this.#id = id;
    this.#description = description;
    this.#isDone = false;
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
}
