import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipPercentageComponent } from './add-tip-percentage.component';

describe('AddTipPercentageComponent', () => {
  let component: AddTipPercentageComponent;
  let fixture: ComponentFixture<AddTipPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipPercentageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTipPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
