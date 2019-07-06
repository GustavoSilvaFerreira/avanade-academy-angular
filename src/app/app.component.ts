import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo/todo.service';
import { map, debounceTime } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  contador = 0;

  user$: Observable<any>;

  constructor(public todoService: TodoService, 
              private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');

    if(!token) {
      this.router.navigateByUrl('/auth/login');
    }

    if(token) {
      this.authService.verificarToken(token).subscribe((v: any) => {
        this.authService.setUser({
          id: v.users[0].localId,
          email: v.users[0].email,
        });
      });
    }

    this.user$ = this.authService.correntUser;

    this.todoService.contador
    .pipe(
      map(value => value * 2), 
      debounceTime(2000)
    )
    .subscribe(value => {
      this.contador = value;
    });
  }

  logout() {
    this.authService.logout();
  }
  
}
