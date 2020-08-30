import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvailabilityFlagComponent } from './components/availability-flag/availability-flag.component';
import { InfoMsgBoxComponent } from './components/info-msg-box/info-msg-box.component';
import { HighlightDirective } from './components/highlight/highlight.directive';
import { MakeColorDirective } from './components/make-color/make-color.directive';


@NgModule({
  declarations: [
    AvailabilityFlagComponent,
    InfoMsgBoxComponent,
    HighlightDirective,
    MakeColorDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AvailabilityFlagComponent,
    InfoMsgBoxComponent,
    HighlightDirective,
    MakeColorDirective
  ]
})
export class SharedModule { }
