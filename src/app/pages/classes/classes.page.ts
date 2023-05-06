import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage implements OnInit {

  counter = 20;
  reserved = false;
  public alertButtons = ['OK'];
  progress = 0.8;

  reserve() {
    if (this.counter < 25) {
      this.counter++;

      this.reserved = true;

      setTimeout(() => {
        this.progress += 0.05;
      }, 2000);
    }
  }

  ngOnInit() {
  }

}
