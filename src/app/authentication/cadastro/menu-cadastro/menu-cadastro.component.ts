import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/core/services/snackbar.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { CadastroDescricaoComponent } from './components/cadastro-descricao/cadastro-descricao.component';
import { CadastroImagemComponent } from './components/cadastro-imagem/cadastro-imagem.component';

@Component({
  selector: 'app-menu-cadastro',
  templateUrl: './menu-cadastro.component.html',
  styleUrls: ['./menu-cadastro.component.scss']
})
export class MenuCadastroComponent implements OnInit {

  constructor(
    private snackBar: SnackbarService,
    private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  cadastroImagem(){
    this.dialogService.open(CadastroImagemComponent,
    {
      width: '900px',
      height: '1000px'
    })
  }

  cadastroDescricao(){
    this.dialogService.open(CadastroDescricaoComponent,
    {
      width: '900px',
      height: '1000px'
    })
  }
}
