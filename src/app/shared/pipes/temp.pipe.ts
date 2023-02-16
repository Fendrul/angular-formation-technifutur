import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TempPipe implements PipeTransform {

  transform(value: number, uniteEntre: string, UniteSortie: string): number {
    let result: number = 0;
    switch (uniteEntre) {
      case 'C': {
        result = value + 273.15;
        break;
      }

      case 'F': {
        result = (value - 32) * 5 / 9 + 273.15;
        break;
      }

      case 'K': {
        result = value;
        break;
      }

      default: {
        throw new Error('Unite d\'entrée de temperature non reconnue');
      }
    }

    switch (UniteSortie) {
      case 'C': {
        result = result - 273.15;
        break;
      }

      case 'F': {
        result = (result - 273.15) * 9 / 5 + 32;
        break;
      }

      case 'K': {
        break;
      }

      default: {
        throw new Error('Unite de sortie de temperature de sortie non reconnue');
      }
    }

    return result;
  }

}
