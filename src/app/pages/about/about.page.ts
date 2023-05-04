import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Map, NavigationControl } from 'maplibre-gl';
import { MessageForm } from './about.page.form';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit, AfterViewInit {

  form!: FormGroup;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;
  public alertButtons = ['OK'];
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = new MessageForm(this.formBuilder).createForm();
  }

  ngAfterViewInit() {
    /*const myAPIKey = '***'; 
    const mapStyle = 'https://maps.geoapify.com/v1/styles/positron/style.json';

    const initialState = { lng: 25.04403, lat: 60.29530, zoom: 15 };

    const map = new Map({
      container: this.mapContainer.nativeElement,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

    map.addControl(new NavigationControl());
  }*/
}
 onSubmit() {
  if(this.form.valid) {
    console.log("Form submitted!");
    this.form.reset();
  }
 }


}