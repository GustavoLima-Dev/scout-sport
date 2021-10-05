import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material/material.module';
import { CadastroComponent } from './cadastro/cadastro.component';


@NgModule({

  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
  ],
})
export class AuthenticationModule { }
