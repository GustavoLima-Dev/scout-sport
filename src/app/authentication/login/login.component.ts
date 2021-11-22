import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    nome: new FormControl,
    senha: new FormControl
  });

  constructor(
    private snackbar: SnackbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logar(){
    this.formLogin.value;
    this.router.navigate(['listarPosts']);
  }

}
