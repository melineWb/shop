import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const GeneratorDataService = new InjectionToken<number>('GeneratorDataService');

export function GeneratorFactory(n: number): any {
    return (generatorService: GeneratorService): string => {
        return generatorService.generate(n);
    };
}
