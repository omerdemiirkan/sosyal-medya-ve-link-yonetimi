import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appEmailFormat]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailFormatDirective, multi: true }]
})
export class EmailFormatDirective implements Validator {

  @Input('appEmailFormat') emailFormat: string = '';

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const valid = emailPattern.test(control.value);

    return valid ? null : { 'emailFormat': { value: control.value } };
  }
}
