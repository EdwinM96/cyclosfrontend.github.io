import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleRowComponent } from './circle-row.component';

describe('CircleRowComponent', () => {
  let component: CircleRowComponent;
  let fixture: ComponentFixture<CircleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
