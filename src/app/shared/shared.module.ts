import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvailabilityFlagComponent } from './components/availability-flag/availability-flag.component';
import { InfoMsgBoxComponent } from './components/info-msg-box/info-msg-box.component';
import { HighlightDirective } from './components/highlight/highlight.directive';


@NgModule({
  declarations: [
    AvailabilityFlagComponent,
    InfoMsgBoxComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AvailabilityFlagComponent,
    InfoMsgBoxComponent,
    HighlightDirective
  ]
})
export class SharedModule { }
