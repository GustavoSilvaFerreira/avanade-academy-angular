import { Component, OnInit } from '@angular/core';
import { DadosCreate } from 'src/typings/dadosCreate';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  dadosCreate: DadosCreate = {
    email: '',
    senha: ''
  }

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  criar() {
    this.authService.createAccount(this.dadosCreate.email, this.dadosCreate.senha)
    .subscribe((value: any) => {
      alert('Usuário criado com sucesso');
      localStorage.setItem('token', value.idToken);

      this.authService.setUser({
        id: value.localId,
        email: value.email,
      });

      this.router.navigateByUrl('/todos');
    });
  }

}
