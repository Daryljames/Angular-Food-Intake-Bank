import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Meal } from 'src/app/models/meal';
import { MealService } from 'src/app/services/meal.service';
import { FoodList } from 'src/app/models/foodList';
import { FoodListServiceTsService } from 'src/app/services/food-list.service.ts.service';
import { FilterService } from 'src/app/services/filter.service';
import { DatePipe } from '@angular/common';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-food-bank',
  templateUrl: './food-bank.component.html',
  styleUrls: ['./food-bank.component.scss'],
})
export class FoodBankComponent {
  meals: Meal[] = [];
  FoodList: FoodList[] = [];
  date: Date = new Date();
  formatttedDateEaten: String = '';
  user: User;

  constructor(
    private mealService: MealService,
    private foodListService: FoodListServiceTsService,
    private filterService: FilterService,
    private userService: UserService
  ) {}

  @Output() formEvent: EventEmitter<FoodList> = new EventEmitter<FoodList>();

  ngOnInit(): void {
    console.log('ngOnInit() fired for AppComponent');
    this.mealService.getAll().subscribe((meal) => {
      this.meals = meal;
      console.log(meal);
    });
    this.foodListService.getAll().subscribe((food) => {
      console.log(food);
      this.FoodList = food;
    });
    this.userService.getById().subscribe((user) => {
      this.user = user;
    });
  }

  editFoodItem = (food: FoodList) => {
    let index = this.FoodList.findIndex((el) => el == food);
    this.FoodList[index].isNotEditable = false;
  };

  saveFoodItem = (food: FoodList) => {
    console.log('Button was clicked');
    let o = { ...food };
    console.log(o);
    o.isNotEditable = true;
    o.lastUpdatedOn = new Date();
    o.lastUpdatedBy = this.user.firstName + ' ' + this.user.lastName;
    console.log(o);

    this.foodListService.save(o).subscribe((savedFoodItem) => {
      this.formEvent.emit(savedFoodItem);
    });

    let index = this.FoodList.findIndex((el) => el == food);
    this.FoodList[index].isNotEditable = true;
  };

  deleteFoodItem = (food: FoodList) => {
    let o = { ...food };

    o.isActive = false;
    console.log(o);
    o.lastUpdatedOn = new Date();
    o.lastUpdatedBy = this.user.firstName + ' ' + this.user.lastName;
    console.log(o);
    this.foodListService.delete(o).subscribe((savedFoodItem) => {
      this.formEvent.emit(savedFoodItem);
      this.ngOnInit();
    });
  };

  goBackOneDate = (oneDay: Date) => {
    this.date = this.filterService.goBackOneDate(oneDay);
  };

  goForwardOneDate = (oneDay: Date) => {
    this.date = this.filterService.goForwardOneDate(oneDay);
  };
}
