import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/typings/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() data: Todo;

  // enviar para elemento pai
  @Output() deleteEvent = new EventEmitter<number>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  editar() {
    this.router.navigateByUrl(`/todos/${this.data.id}`);
  }

  excluir() {
    this.deleteEvent.emit(this.data.id);
  }

}