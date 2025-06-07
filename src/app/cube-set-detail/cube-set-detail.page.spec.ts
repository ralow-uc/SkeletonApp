import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CubeSetDetailPage } from './cube-set-detail.page';

describe('CubeSetDetailPage', () => {
  let component: CubeSetDetailPage;
  let fixture: ComponentFixture<CubeSetDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeSetDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
