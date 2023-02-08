import { Component, Input } from '@angular/core';
import { FoodList } from '../models/foodList';
import { User } from '../models/user';
import { FoodListCalculatorService } from '../services/food-list-calculator.service';
import { FoodListServiceTsService } from '../services/food-list.service.ts.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  constructor(
    private foodList: FoodListServiceTsService,
    private foodListCalculator: FoodListCalculatorService,
    private userService: UserService
  ) {}
  FoodList: FoodList[] = [];
  // users: User;
  user: User = {
    id: 0,
    firstName: '',
    middleName: '',
    lastName: 'string',
    age: 0,
    weight: 0,
    weightType: 'string',
    height: 0,
    heightType: '',
    userType: '',
    calorieGoal: 0,
    email: '',
    password: '',
  };

  totalFoodCalories: number = 0;

  remainingCalories: number = 0;

  ngOnInit(): void {
    this.userService.getById().subscribe((user) => {
      this.user = user;
    });

    this.foodList.getAll().subscribe((food) => {
      this.FoodList = food;

      this.totalFoodCalories = this.foodListCalculator.computeAllCalories(
        this.FoodList
      );

      this.remainingCalories = this.foodListCalculator.computeRemainingCalories(
        this.user,
        this.totalFoodCalories
      );
    });
  }
}
