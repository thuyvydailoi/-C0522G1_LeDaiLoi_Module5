import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityeditComponent } from './facilityedit.component';

describe('FacilityeditComponent', () => {
  let component: FacilityeditComponent;
  let fixture: ComponentFixture<FacilityeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
