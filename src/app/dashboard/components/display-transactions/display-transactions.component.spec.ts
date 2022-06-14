import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTransactionsComponent } from './display-transactions.component';

describe('DisplayTransactionsComponent', () => {
  let component: DisplayTransactionsComponent;
  let fixture: ComponentFixture<DisplayTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
