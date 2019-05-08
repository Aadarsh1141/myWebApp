import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideProfileComponent } from './ride-profile.component';

describe('RideProfileComponent', () => {
  let component: RideProfileComponent;
  let fixture: ComponentFixture<RideProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
