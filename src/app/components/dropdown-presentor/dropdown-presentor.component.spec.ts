import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownPresentorComponent } from './dropdown-presentor.component';

describe('DropdownPresentorComponent', () => {
  let component: DropdownPresentorComponent;
  let fixture: ComponentFixture<DropdownPresentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownPresentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownPresentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
