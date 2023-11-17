import { Component } from '@angular/core';
 

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent {
  todos: string[] = [];
  newTodo: string = '';
  editMode: boolean = false;
  editIndex: number = -1;

  addTodo() {
    if (this.newTodo.trim() !== '') {
      if (this.editMode) {
        // Update existing todo
        this.todos[this.editIndex] = this.newTodo.trim();
        this.editMode = false;
      } else {
        // Add new todo
        this.todos.push(this.newTodo.trim());
      }
      this.newTodo = '';
    }
  }

  editTodo(index: number) {
    this.editMode = true;
    this.editIndex = index;
    this.newTodo = this.todos[index];
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}