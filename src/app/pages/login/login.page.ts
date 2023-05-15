import { AuthService } from './../../services/auth.service';
import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  /* Made the credentials needed for login/register. Password needs
  minimum length of 6 characters */
  credentials = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  // Made components to get the login function working through firebase and to prevent Login from swiping to splashscreen
  constructor(
    private fb: FormBuilder, 
    private loadingController: LoadingController, 
    private alertController: AlertController, 
    private AuthService: AuthService, 
    private router: Router
  ) {
   }
  // Easy access for form fields
  get email() {
    return this.credentials.controls.email;
  }

  get password() {
    return this.credentials.controls.password;
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.AuthService.login(
      this.credentials.getRawValue()
    );
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/home', {replaceUrl: true});
    } else {
      this.showAlert("Login failed", "Please try again!");
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
