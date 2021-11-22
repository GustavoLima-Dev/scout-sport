import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdbIconComponent } from 'angular-bootstrap-md';
import { MaterialModule } from 'src/app/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './authentication/cadastro/cadastro.component';
import { LoginComponent } from './authentication/login/login.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, CadastroComponent],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent, MdbIconComponent],
})
export class AppModule {}
