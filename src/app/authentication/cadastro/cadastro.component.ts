import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    email: new FormControl,
    nome: new FormControl,
    senha: new FormControl,
    confirmarSenha: new FormControl
  });


  constructor() { }

  ngOnInit(): void {
  }

}
