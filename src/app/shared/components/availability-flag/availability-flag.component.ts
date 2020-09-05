import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-availability-flag',
  templateUrl: './availability-flag.component.html',
  styleUrls: ['./availability-flag.component.less']
})
export class AvailabilityFlagComponent implements OnChanges {
  text: string;
  @Input() isAvailable: boolean;

  constructor() { }

  ngOnChanges(): void {
    this.setDataFlag();
  }

  setDataFlag(): void {
    this.text = this.isAvailable ? 'In Stock' : 'Not available';
  }

}
