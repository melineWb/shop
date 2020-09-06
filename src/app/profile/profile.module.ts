import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ModalLoginComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    ModalLoginComponent,
  ]
})
export class ProfileModule { }
