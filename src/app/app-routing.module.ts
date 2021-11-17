import { CriarPostsComponent } from './modules/posts/pages/criar-posts/criar-posts.component';
import { ListarPostsComponent } from './modules/posts/pages/listar-posts/listar-posts.component';
import { MenuCadastroComponent } from './authentication/cadastro/menu-cadastro/menu-cadastro.component';
import { CadastroComponent } from './authentication/cadastro/cadastro.component';
import { LoginComponent } from './authentication/login/login.component';
import { NgModule, Component } from '@angular/core';
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
        component: CadastroComponent,
      },

      {
        path: 'cadastro/menuCadastro',
        component: MenuCadastroComponent
      },

      {
      path: 'listarPosts',
      component: ListarPostsComponent
      },

      {
        path: 'criarPost',
        component: CriarPostsComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
