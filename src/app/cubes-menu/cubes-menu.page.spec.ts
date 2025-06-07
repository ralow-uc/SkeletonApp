import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CubesMenuPage } from './cubes-menu.page';

describe('CubesMenuPage', () => {
  let component: CubesMenuPage;
  let fixture: ComponentFixture<CubesMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CubesMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
