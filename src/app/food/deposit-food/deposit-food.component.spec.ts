import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositFoodComponent } from './deposit-food.component';

describe('DepositFoodComponent', () => {
  let component: DepositFoodComponent;
  let fixture: ComponentFixture<DepositFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
