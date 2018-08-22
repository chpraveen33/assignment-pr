import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltComponent } from './filt.component';

describe('FiltComponent', () => {
  let component: FiltComponent;
  let fixture: ComponentFixture<FiltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
