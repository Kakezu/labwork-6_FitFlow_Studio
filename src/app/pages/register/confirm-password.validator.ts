import { AbstractControl } from '@angular/forms';

export class ConfirmPasswordValidator {
  static checkConfirmPassword(control: AbstractControl): { [key: string]: boolean } | null {
    let password = control.get('password');
    let confirmPassword = control.get('confirmpassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }
}