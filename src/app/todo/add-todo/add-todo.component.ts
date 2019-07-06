import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/typings/todo';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

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
    date: '',
    userId: '',
  };

  isEdit = false;

  constructor(private todoService: TodoService, 
              private router: Router,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if(params.id) {
        this.isEdit = true;

        this.todoService.getTodo(params.id).subscribe((todo: Todo) => {
          this.todo = todo;
        });
      }

    });

    this.authService.correntUser.subscribe((user) => {
      this.todo.userId = user.id;
    });
  }

  enviar() {
    this.todoService.adicionarTodo(this.todo).subscribe(() => {
      alert('Adicionado com sucesso!!!');
      this.router.navigateByUrl('/todos');
    });
  }
  
  sendEdit() {
    this.todoService.updateTodo(this.todo.id, this.todo).subscribe(() => {
      alert('Alterado com sucesso!!!');
      this.router.navigateByUrl('/todos');
    });
  }

}
