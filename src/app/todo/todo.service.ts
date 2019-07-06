import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/typings/todo';

const API_TODOS = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private pContador = new BehaviorSubject(0);

  contador = this.pContador.asObservable();

  constructor(private httpClient: HttpClient) { }

  getTodos(userId): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${API_TODOS}/users/${userId}/todos`);
  }

  adicionarTodo(todo: Todo) {
    return this.httpClient.post(`${API_TODOS}/todos`, todo);
  }

  getTodo(id) {
    return this.httpClient.get(`${API_TODOS}/todos/${id}`);
  }

  updateTodo(id, todo) {
    return this.httpClient.put(`${API_TODOS}/todos/${id}`, todo);
  }

  deleteTodo(id) {
    return this.httpClient.delete(`${API_TODOS}/todos/${id}`);
  }

  aumentar() {
    this.pContador.next(this.pContador.value + 1);
  }

  diminuir() {
    this.pContador.next(this.pContador.value - 1);
  }

}
