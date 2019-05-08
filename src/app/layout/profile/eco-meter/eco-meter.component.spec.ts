import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoMeterComponent } from './eco-meter.component';

describe('EcoMeterComponent', () => {
  let component: EcoMeterComponent;
  let fixture: ComponentFixture<EcoMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
