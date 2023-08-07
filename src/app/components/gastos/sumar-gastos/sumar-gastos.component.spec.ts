import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumarGastosComponent } from './sumar-gastos.component';

describe('SumarGastosComponent', () => {
  let component: SumarGastosComponent;
  let fixture: ComponentFixture<SumarGastosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SumarGastosComponent]
    });
    fixture = TestBed.createComponent(SumarGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
