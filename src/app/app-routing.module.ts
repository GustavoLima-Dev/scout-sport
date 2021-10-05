import { CadastroComponent } from './authentication/cadastro/cadastro.component';
import { LoginComponent } from './authentication/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from './core/components/navigation/navigation.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },

      {
        path: 'login',
        component: LoginComponent
      },

        {
        path: 'cadastro',
        component: CadastroComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
