import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly  API = 'https://localhost:5001/api/Pessoa'

  constructor(private http: HttpClient) { }

  enviarDadosLogin(dados:any): any{
    this.http.post<string>(this.API, dados)
  }
}
