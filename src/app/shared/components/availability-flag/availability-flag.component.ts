import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-availability-flag',
  templateUrl: './availability-flag.component.html',
  styleUrls: ['./availability-flag.component.less']
})
export class AvailabilityFlagComponent implements OnInit, OnChanges {
  text: string;
  @Input() isAvailable: boolean;

  constructor() { }

  ngOnInit(): void {
    this.setDataFlag();
  }

  // первый раз выполниться перед ngOnInit()
  // может быть не надо вызывать в ngOnInit()
  ngOnChanges(): void {
    this.setDataFlag();
  }

  setDataFlag(): void {
    this.text = this.isAvailable ? 'In Stock' : 'Not available';
  }

}
