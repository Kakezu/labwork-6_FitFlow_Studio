import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-healthtips',
  templateUrl: './healthtips.page.html',
  styleUrls: ['./healthtips.page.scss'],
})
export class HealthtipsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myFunction() {
    console.log("clicked")
  }

}

