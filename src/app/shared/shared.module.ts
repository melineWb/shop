import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvailabilityFlagComponent } from './availability-flag/availability-flag.component';
import { InfoMsgBoxComponent } from './info-msg-box/info-msg-box.component';


@NgModule({
  declarations: [
    AvailabilityFlagComponent,
    InfoMsgBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AvailabilityFlagComponent,
    InfoMsgBoxComponent
  ]
})
export class SharedModule { }
