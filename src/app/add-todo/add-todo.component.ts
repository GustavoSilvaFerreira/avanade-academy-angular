import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/typings/todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  email = '';

  todo: Todo = {
    id: null,
    title: '',
    description: '',
    finished: false,
    date: ''
  }

  constructor(private todoService: TodoService, 
              private router: Router) { }

  ngOnInit() {
  }

  enviar() {
    console.log(this.todo);

    this.todoService.adicionarTodo(this.todo).subscribe(() => {
      alert('Adicionado com sucesso!!!');
      this.router.navigateByUrl('/todos');
    });
  }

}
