import { Component, Input, OnInit } from '@angular/core';
import { Meal } from 'src/app/models/meal';
import { MealService } from 'src/app/services/meal.service';
import { FoodList } from 'src/app/models/foodList';
import { FoodListServiceTsService } from 'src/app/services/food-list.service.ts.service';

@Component({
  selector: 'app-food-bank',
  templateUrl: './food-bank.component.html',
  styleUrls: ['./food-bank.component.scss'],
})
export class FoodBankComponent {
  meals: Meal[] = [];
  FoodList: FoodList[] = [];

  constructor(
    private mealService: MealService,
    private foodListService: FoodListServiceTsService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit() fired for AppComponent');
    this.mealService.getAll().subscribe((meal) => {
      this.meals = meal;
    });
    this.foodListService.getAll().subscribe((food) => {
      console.log(food);
      this.FoodList = food;
    });
  }
}
