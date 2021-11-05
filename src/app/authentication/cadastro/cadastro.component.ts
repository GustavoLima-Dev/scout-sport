import { Router} from '@angular/router'
import { SnackbarService } from './../../shared/services/snackbar.service';
import { CadastroService } from './../services/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  formCadastro = new FormGroup({
    email: new FormControl(),
    nome: new FormControl(),
    senha: new FormControl(),
  });

  constructor(
    private cadastroService: CadastroService,
    private snackbar: SnackbarService,
    private router: Router) {}

  ngOnInit(): void {}

  salvarUsuario(): any {
    this.cadastroService
      .enviarDadosLogin(this.formCadastro.value)
      .subscribe((responce: any) => {
        this.snackbar.openSuccess('Usuario cadastrado')
        this.router.navigate(['menuCadastro'])
      });
  }
}
