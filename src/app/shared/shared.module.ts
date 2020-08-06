import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvailabilityFlagComponent } from './availability-flag/availability-flag.component';


@NgModule({
  declarations: [
    AvailabilityFlagComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AvailabilityFlagComponent
  ]
})
export class SharedModule { }
