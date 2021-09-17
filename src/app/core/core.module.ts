import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    // NavigationComponent,
    // HomeComponent

    NavigationComponent
  ],
  imports: [CommonModule, MaterialModule, RouterModule, ReactiveFormsModule,FormsModule],
  exports: [NavigationComponent],
 // providers: [{ provide: ErrorHandler, useClass: ApplicationErrorHandler }],
})
export class CoreModule {}
