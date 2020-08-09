import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-info-msg-box',
  templateUrl: './info-msg-box.component.html',
  styleUrls: ['./info-msg-box.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoMsgBoxComponent {
  msg: string;
  visibleMsg = false;
  timeoutVariable = null;

  constructor(public cd: ChangeDetectorRef) {}

  private timeoutMsgDisable(): void {
    this.timeoutVariable = setTimeout((): void => {
      this.visibleMsg = false;
      this.cd.detectChanges();
    }, 3000);

  }

  showMsg(msg: string): void {
    this.msg = msg;
    this.visibleMsg = true;
    this.cd.detectChanges();
    clearTimeout(this.timeoutVariable);

    this.timeoutMsgDisable();
  }

}
