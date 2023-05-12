import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private AuthService: AuthService, private router: Router) {}

  async logout() {
    this.AuthService.logout();
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
