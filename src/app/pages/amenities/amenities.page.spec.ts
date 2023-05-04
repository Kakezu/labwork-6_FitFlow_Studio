import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmenitiesPage } from './amenities.page';

describe('AmenitiesPage', () => {
  let component: AmenitiesPage;
  let fixture: ComponentFixture<AmenitiesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AmenitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
