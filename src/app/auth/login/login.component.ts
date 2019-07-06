import { Component, OnInit } from '@angular/core';
import { DadosLogin } from 'src/typings/dados-login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dadosLogin: DadosLogin = {
    email: '',
    senha: ''
  }

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  entrar() {
    this.authService.login(this.dadosLogin.email, this.dadosLogin.senha)
    .subscribe((value: any) => {
      alert('Login efetuado com sucesso!!!');
      localStorage.setItem('token', value.idToken);

      this.authService.setUser({
        id: value.localId,
        email: value.email,
      });

      this.router.navigateByUrl('/todos');
    },
    (error) => {
      switch (error.error.error.message) {
        case 'EMAIL_NOT_FOUND':
          alert('E-mail não encontrado');
          break;
        case 'INVALID_PASSWORD':
          alert('Senha inválida');
          break;
        default:
          alert('Houve um erro');
          break;
      }
    });
  }

}
