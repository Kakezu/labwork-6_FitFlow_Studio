import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Map, NavigationControl } from 'maplibre-gl';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit, AfterViewInit {

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    /*const myAPIKey = '9ed23de309d045429510cc25b7666bb2'; 
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
}