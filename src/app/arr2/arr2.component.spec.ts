import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arr2Component } from './arr2.component';

describe('Arr2Component', () => {
  let component: Arr2Component;
  let fixture: ComponentFixture<Arr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arr2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Arr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
