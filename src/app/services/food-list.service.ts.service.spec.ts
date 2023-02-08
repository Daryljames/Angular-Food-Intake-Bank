import { TestBed } from '@angular/core/testing';

import { FoodListServiceTsService } from './food-list.service.ts.service';

describe('FoodListServiceTsService', () => {
  let service: FoodListServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodListServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
