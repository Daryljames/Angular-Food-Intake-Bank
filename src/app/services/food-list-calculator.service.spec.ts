import { TestBed } from '@angular/core/testing';

import { FoodListCalculatorService } from './food-list-calculator.service';

describe('FoodListCalculatorService', () => {
  let service: FoodListCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodListCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
