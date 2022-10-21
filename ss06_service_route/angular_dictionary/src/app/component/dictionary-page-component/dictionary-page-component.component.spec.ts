import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryPageComponentComponent } from './dictionary-page-component.component';

describe('DictionaryPageComponentComponent', () => {
  let component: DictionaryPageComponentComponent;
  let fixture: ComponentFixture<DictionaryPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaryPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
