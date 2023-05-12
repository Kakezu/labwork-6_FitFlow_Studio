import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor(private router: Router) { }

  showHomePageForFiveSeconds() {
    setTimeout(() => {
      this.router.navigate(['/login']); // navigate to the home page
    }, 5000); // wait for 5 seconds
  }
  ngOnInit() {
    this.showHomePageForFiveSeconds();
  }

}
