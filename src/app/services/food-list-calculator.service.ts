import { Injectable } from '@angular/core';
import { FoodList } from '../models/foodList';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class FoodListCalculatorService {
  constructor() {}

  computeAllCalories = (foodList: FoodList[]): number => {
    let total = 0.0;

    foodList.forEach((item: FoodList) => {
      let today = new Date();
      if (
        item.isActive == true &&
        new Date(item.dateEaten) >
          new Date(today.setDate(today.getDate() - 1)) &&
        new Date(item.dateEaten) < new Date(today.setDate(today.getDate() + 1))
      ) {
        total += item.calorie * item.quantity;
      }
    });

    return total;
  };

  computeRemainingCalories = (user: User, calorie: number): number => {
    let remainingCalories = 0;

    remainingCalories = user.calorieGoal - calorie;

    return remainingCalories;
  };
}
