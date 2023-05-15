import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor(
    private router: Router,
    private routerOutlet: IonRouterOutlet
    ) {
      this.routerOutlet.swipeGesture = false;
     }

  showHomePageForFiveSeconds() {
    setTimeout(() => {
      this.router.navigate(['/login']); // navigate to the home page
    }, 5000); // wait for 5 seconds
  }
  ngOnInit() {
    this.showHomePageForFiveSeconds();
  }

}
