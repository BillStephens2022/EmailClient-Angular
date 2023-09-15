import { Injectable } from '@angular/core';
import { Validator, FormGroup, AbstractControl } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
  validate(control: AbstractControl) {
    const password = control.get('password');
    const passwordConfirmation = control.get('passwordConfirmation');

    if (
      password &&
      passwordConfirmation &&
      password.value !== passwordConfirmation.value
    ) {
      return { passwordsDontMatch: true };
    }

    return null;
  }
}
