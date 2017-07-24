import {Pipe, PipeTransform} from "@angular/core"


@Pipe({name: 'customPipe'})

export class CustomPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 10 : exp)
  }
}
