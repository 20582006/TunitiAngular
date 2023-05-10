import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTipPercentageComponent } from './update-tip-percentage.component';

describe('UpdateTipPercentageComponent', () => {
  let component: UpdateTipPercentageComponent;
  let fixture: ComponentFixture<UpdateTipPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTipPercentageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTipPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
