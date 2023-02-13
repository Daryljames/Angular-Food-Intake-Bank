import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FoodList } from 'src/app/models/foodList';
import { User } from 'src/app/models/user';
import { FoodListServiceTsService } from 'src/app/services/food-list.service.ts.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposit-food',
  templateUrl: './deposit-food.component.html',
  styleUrls: ['./deposit-food.component.scss'],
})
export class DepositFoodComponent {
  constructor(
    private foodListService: FoodListServiceTsService,
    private userService: UserService
  ) {}

  user: User;

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
    userId: 0,
  };
  nameError = '';
  mealError = '';
  calorieError = '';
  quantityError = '';
  measureError = '';
  dateEatenError = '';

  ngOnInit(): void {
    this.userService.getById().subscribe((user) => {
      this.user = user;
    });
    this.nameError = '';
    this.mealError = '';
    this.calorieError = '';
    this.quantityError = '';
    this.measureError = '';
    this.dateEatenError = '';
  }

  @Output() formEvent: EventEmitter<FoodList> = new EventEmitter<FoodList>();

  btnClicked = () => {
    console.log('Button was clicked');
    let o = { ...this.foodlists };

    o.userId = this.user.id;
    o.createdOn = new Date();
    o.lastUpdatedOn = new Date();
    o.createdBy = this.user.firstName + ' ' + this.user.lastName;
    o.lastUpdatedBy = this.user.firstName + ' ' + this.user.lastName;
    console.log(o);
    // console.log(new Date(o.dateEaten.getTime()));

    // this.foodListService.save(o).subscribe((savedFoodItem) => {
    //   this.formEvent.emit(savedFoodItem);
    // });
    this.foodListService.save(o).subscribe({
      next: (savedFoodItem) => {
        this.formEvent.emit(savedFoodItem);
        Swal.fire({ icon: 'success', text: 'Food Item Added' });
      },
      // error: (e) => {
      //   console.log(o.dateEaten);
      //   console.log(e);
      // },
      error: (e) => {
        console.log(e);
        e.error.calorie.forEach((c: any) => {
          this.calorieError = c;
          // Swal.fire({ icon: 'error', text: c });
        });
        e.error.meal.forEach((meal: any) => {
          this.mealError = meal;
        });
        e.error.name.forEach((name: any) => {
          this.nameError = name;
          // Swal.fire({ icon: 'error', text: c });
        });
        e.error.quantity.forEach((q: any) => {
          this.quantityError = q;
        });
        e.error.measure.forEach((measure: any) => {
          this.measureError = measure;
        });
        e.error.dateEaten.forEach((dateEaten: any) => {
          this.dateEatenError = dateEaten;
        });
        Swal.fire({
          icon: 'error',
          text: `${this.nameError} |
              ${this.mealError} |
              ${this.calorieError} |
              ${this.quantityError} |
              ${this.measureError} |
              ${this.dateEatenError}
              `,
        });
        this.ngOnInit();
      },
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
