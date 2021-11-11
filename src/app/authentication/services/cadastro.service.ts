import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly  API = 'https://localhost:5001/api/Pessoa';

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};

  constructor(private http: HttpClient) { }

  enviarDadosLogin(dados:string): Observable<string>{
    return this.http.post<string>(this.API, dados)
  }
}
