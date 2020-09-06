import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AvailabilityFlagComponent } from './components/availability-flag/availability-flag.component';
import { InfoMsgBoxComponent } from './components/info-msg-box/info-msg-box.component';

import { HighlightDirective } from './components/highlight/highlight.directive';
import { MakeColorDirective } from './components/make-color/make-color.directive';

import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    AvailabilityFlagComponent,
    InfoMsgBoxComponent,
    HighlightDirective,
    MakeColorDirective,
    OrderByPipe,
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    AvailabilityFlagComponent,
    InfoMsgBoxComponent,
    HighlightDirective,
    MakeColorDirective,
    OrderByPipe,
  ]
})
export class SharedModule { }
