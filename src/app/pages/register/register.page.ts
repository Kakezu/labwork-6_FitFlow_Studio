import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  /* Made the credentials needed for login/register. Username needs to be max
  15 characters. Password needs
  minimum length of 6 characters and checkbox checked. Also password confirm added*/
  credentials = this.fb.nonNullable.group(
    {
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],
      checkbox: [false, Validators.requiredTrue]
    },
    { validators: ConfirmPasswordValidator.checkConfirmPassword }
  );
  // Made components to get the login function working through firebase
  constructor(
    private fb: FormBuilder, 
    private loadingController: LoadingController, 
    private alertController: AlertController, 
    private AuthService: AuthService, 
    private router: Router
  ) { }

  // Easy access for form fields

  get firstname() {
    return this.credentials.controls.firstname;
  }

  get lastname() {
    return this.credentials.controls.lastname;
  }

  get username() {
    return this.credentials.controls.username;
  }

  get email() {
    return this.credentials.controls.email;
  }

  get password() {
    return this.credentials.controls.password;
  }

  get confirmpassword() {
    return this.credentials.controls.confirmpassword;
  }

  
  async register() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.AuthService.register(
      this.credentials.getRawValue()
    );
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/home', {replaceUrl: true});
    } else {
      this.showAlert("Registration failed", "Please try again!");
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
