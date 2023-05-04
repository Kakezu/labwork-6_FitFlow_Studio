import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healthtips',
  templateUrl: './healthtips.page.html',
  styleUrls: ['./healthtips.page.scss'],
})
export class HealthtipsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navToSleep() {
    this.router.navigate(['/sleeptips'])
  }

}

