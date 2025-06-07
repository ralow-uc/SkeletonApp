import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CubeDetailPage } from './cube-detail.page';

describe('CubeDetailPage', () => {
  let component: CubeDetailPage;
  let fixture: ComponentFixture<CubeDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
