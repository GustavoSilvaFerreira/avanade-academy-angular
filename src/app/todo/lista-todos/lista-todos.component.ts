import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/typings/todo';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
  styleUrls: ['./lista-todos.component.css']
})
export class ListaTodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(public todoService: TodoService,
              private authService:AuthService) { }

  ngOnInit() {
    this.authService.correntUser.subscribe((user) => {
      this.todoService.getTodos(user.id).subscribe((todos) => {
        this.todos = todos;
      });
    });
  };

  onDeleteItem(id) {
    this.todoService.deleteTodo(id).subscribe((v) => {
      alert('Excluido com sucesso!!!');
      this.todos = this.todos.filter((todo) => todo.id !== id);
    });
  }
}
