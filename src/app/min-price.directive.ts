import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appMinPrice]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinPriceDirective, multi: true }]
})
export class MinPriceDirective implements Validator {
  @Input('appMinPrice') minPrice = '';

  validate(control: AbstractControl): ValidationErrors | null {
    var y: number = +control.value;
    return y >= +this.minPrice ? null : { "tooCheap": control.value }
  }

}
