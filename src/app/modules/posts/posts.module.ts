import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from './../../shared/shared.module';
import { CriarPostsComponent } from './pages/criar-posts/criar-posts.component';
import { ListarPostsComponent } from './pages/listar-posts/listar-posts.component';




@NgModule({
  declarations: [ListarPostsComponent, CriarPostsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ]
})
export class PostsModule { }
