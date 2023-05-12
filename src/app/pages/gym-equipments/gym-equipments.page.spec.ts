import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GymEquipmentsPage } from './gym-equipments.page';

describe('GymEquipmentsPage', () => {
  let component: GymEquipmentsPage;
  let fixture: ComponentFixture<GymEquipmentsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GymEquipmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
