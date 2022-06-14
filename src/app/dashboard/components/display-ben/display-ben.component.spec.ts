import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBenComponent } from './display-ben.component';

describe('DisplayBenComponent', () => {
  let component: DisplayBenComponent;
  let fixture: ComponentFixture<DisplayBenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayBenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
