import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlgDetailPage } from './alg-detail.page';

describe('AlgDetailPage', () => {
  let component: AlgDetailPage;
  let fixture: ComponentFixture<AlgDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
