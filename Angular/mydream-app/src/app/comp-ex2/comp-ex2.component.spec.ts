import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompEx2Component } from './comp-ex2.component';

describe('CompEx2Component', () => {
  let component: CompEx2Component;
  let fixture: ComponentFixture<CompEx2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompEx2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
