import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HealthtipsPage } from './healthtips.page';

describe('HealthtipsPage', () => {
  let component: HealthtipsPage;
  let fixture: ComponentFixture<HealthtipsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HealthtipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
