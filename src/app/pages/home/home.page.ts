import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private AuthService: AuthService, private router: Router) {}

  async logout() {
    this.AuthService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  // getUsername() {
  //  const user = this.AuthService.currentUser;
  //  if (user) {
  //    return ', ' + user.displayName + '!';
  //  } else {
  //     return '!';
  //  }
  //}

  goToClasses() {
    this.router.navigateByUrl('/classes', { replaceUrl: true });
  }
  goToAmenities() {
    this.router.navigateByUrl('/amenities', { replaceUrl: true });
  }
}
