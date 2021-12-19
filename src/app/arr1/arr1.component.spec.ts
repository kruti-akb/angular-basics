import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arr1Component } from './arr1.component';

describe('Arr1Component', () => {
  let component: Arr1Component;
  let fixture: ComponentFixture<Arr1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arr1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Arr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
