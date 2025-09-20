import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { CommonModule } from '@angular/common';
import { catchError, filter, map, take } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  ngOnInit(): void {
    this.todoService
      .getTodosFromApi()
      .pipe(
        // map(
        //   (todos) => todos.filter((todo) => !todo.completed).slice(0, 5) // filter + take first 5
        // ),
        catchError((err) => {
          console.error('Error fetching todos', err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }
}
