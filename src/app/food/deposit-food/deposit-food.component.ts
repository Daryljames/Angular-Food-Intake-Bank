import { Component, EventEmitter, Output } from '@angular/core';
import { FoodList } from 'src/app/models/foodList';
import { FoodListServiceTsService } from 'src/app/services/food-list.service.ts.service';

@Component({
  selector: 'app-deposit-food',
  templateUrl: './deposit-food.component.html',
  styleUrls: ['./deposit-food.component.scss'],
})
export class DepositFoodComponent {
  constructor(private foodListService: FoodListServiceTsService) {}

  foodlists: FoodList = {
    meal: '',
    name: '',
    calorie: 0.0,
    quantity: 0.0,
    measure: '',
    dateEaten: new Date(),
    createdOn: new Date(),
    createdBy: '',
    lastUpdatedOn: new Date(),
    lastUpdatedBy: '',
    isActive: true,
    isNotEditable: true,
    user: 1,
  };

  @Output() formEvent: EventEmitter<FoodList> = new EventEmitter<FoodList>();

  btnClicked = () => {
    console.log('Button was clicked');
    let o = { ...this.foodlists };
    console.log(o);

    this.foodListService.save(o).subscribe((savedFoodItem) => {
      this.formEvent.emit(savedFoodItem);
    });

    (this.foodlists.meal = ''),
      (this.foodlists.name = ''),
      (this.foodlists.calorie = 0.0),
      (this.foodlists.quantity = 0.0),
      (this.foodlists.measure = ''),
      (this.foodlists.dateEaten = new Date()),
      (this.foodlists.createdOn = new Date()),
      (this.foodlists.createdBy = ''),
      (this.foodlists.lastUpdatedOn = new Date()),
      (this.foodlists.lastUpdatedBy = ''),
      (this.foodlists.isActive = true);
    this.foodlists.isNotEditable = false;
  };
}
