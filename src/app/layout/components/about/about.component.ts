import { Component, OnInit, Inject, Optional } from '@angular/core';

import { GeneratorService } from '../../../core/services/generator.service';
import { GeneratorDataService, GeneratorFactory } from '../../../core/services/generator.factory';
import { ConstantsService } from '../../../core/services/constants.service';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { ConfigOptionsService } from '../../../core/services/config-options.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
  providers: [
    GeneratorService,
    {provide: GeneratorDataService, useFactory: GeneratorFactory(10), deps: [GeneratorService]}
  ]
})
export class AboutComponent implements OnInit {
  private settings: object;
  str: string;
  appData: string;
  username: string | object = null;
  title = 'about block';

  constructor(
    @Optional() @Inject(GeneratorDataService) private generatorDataService: string,
    @Optional() private constantsService: ConstantsService,
    @Optional() private localStorageService: LocalStorageService,
    @Optional() private configOptionsService: ConfigOptionsService ) { }

  ngOnInit(): void {
    if (this.generatorDataService) {
      this.str = this.generatorDataService;
    }

    if (this.constantsService) {
      this.appData = `${this.constantsService.app} ${this.constantsService.ver}`;
    }

    if (this.localStorageService) {
      this.username = this.localStorageService.getItem('username');
    }

    if (this.configOptionsService) {
      this.settings = this.configOptionsService.get();
    }
  }

}
