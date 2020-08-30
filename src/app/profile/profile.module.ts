import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ModalLoginComponent } from './components/modal-login/modal-login.component';

@NgModule({
  declarations: [
    ModalLoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ModalLoginComponent,
  ]
})
export class ProfileModule { }
