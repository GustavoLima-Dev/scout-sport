import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material/material.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MenuCadastroComponent } from './cadastro/menu-cadastro/menu-cadastro.component';
import { CadastroImagemComponent } from './cadastro/menu-cadastro/components/cadastro-imagem/cadastro-imagem.component';
import { CadastrodescricaoComponent } from './cadastro/menu-cadastro/components/cadastrodescricao/cadastrodescricao.component';


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
     CadastrodescricaoComponent

  ],
})
export class AuthenticationModule { }
