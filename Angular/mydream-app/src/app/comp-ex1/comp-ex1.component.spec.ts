import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompEx1Component } from './comp-ex1.component';

describe('CompEx1Component', () => {
  let component: CompEx1Component;
  let fixture: ComponentFixture<CompEx1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompEx1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
