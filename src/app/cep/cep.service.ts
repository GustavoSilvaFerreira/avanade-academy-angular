import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cep } from 'src/typings/cep';


@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpClient: HttpClient) { }

  getCep(cep: string) {
    return this.httpClient.get<Cep>('http://viacep.com.br/ws/' + cep + '/json/');
  }
}
