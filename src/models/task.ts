export default class TaskModel {
  #id?: string;
  #description?: string;
  #isDone: boolean;

  constructor(description?: string) {
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

  toObject(){
    return {
      id: this.#id,
      description: this.#description,
      isDone: this.#isDone
    }
  }
}
