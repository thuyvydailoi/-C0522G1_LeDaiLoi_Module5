import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitycreateComponent } from './facilitycreate.component';

describe('FacilitycreateComponent', () => {
  let component: FacilitycreateComponent;
  let fixture: ComponentFixture<FacilitycreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitycreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitycreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
