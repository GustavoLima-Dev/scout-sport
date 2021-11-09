import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material/material.module';

import {
  CadastroDescricaoComponent,
} from './cadastro/menu-cadastro/components/cadastro-descricao/cadastro-descricao.component';
import { CadastroImagemComponent } from './cadastro/menu-cadastro/components/cadastro-imagem/cadastro-imagem.component';
import { MenuCadastroComponent } from './cadastro/menu-cadastro/menu-cadastro.component';


@NgModule({

  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
  ],

  declarations: [
     MenuCadastroComponent,
     CadastroImagemComponent,
     CadastroDescricaoComponent,
     MenuCadastroComponent
  ],
})
export class AuthenticationModule { }
