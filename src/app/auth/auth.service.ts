import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_FIREBASE = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
const KEY = 'AIzaSyDqPL0zdSQlM-CRb7d12WDYt-mdjUZwFhU';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private pUser = new BehaviorSubject(null);

  correntUser = this.pUser.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(email, senha) {
    return this.httpClient.post(`${API_FIREBASE}/verifyPassword?key=${KEY}`, {
      email: email,
      password: senha
    });
  }

  createAccount(email, senha) {
    return this.httpClient.post(`${API_FIREBASE}/signupNewUser?key=${KEY}`, {
      email: email,
      password: senha
    });
  }

  setUser(user) {
    this.pUser.next(user);
  }

  verificarToken(token) {
    return this.httpClient.post(`${API_FIREBASE}/getAccountInfo?key=${KEY}`, {
      idToken: token
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.setUser(null);
    location.reload()
  }
}
