import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantvComponent } from './cantv.component';

describe('CantvComponent', () => {
  let component: CantvComponent;
  let fixture: ComponentFixture<CantvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
