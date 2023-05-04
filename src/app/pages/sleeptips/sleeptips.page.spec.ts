import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SleeptipsPage } from './sleeptips.page';

describe('SleeptipsPage', () => {
  let component: SleeptipsPage;
  let fixture: ComponentFixture<SleeptipsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SleeptipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
