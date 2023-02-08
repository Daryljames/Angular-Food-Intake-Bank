import { Injectable } from '@angular/core';
import { FoodList } from '../models/foodList';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FoodListServiceTsService {
  baseUrl: string = 'http://localhost:5128';
  constructor(private http: HttpClient) {}

  getAll = (): Observable<FoodList[]> => {
    let foods: Observable<FoodList[]>;

    foods = this.http.get<FoodList[]>(
      `${this.baseUrl}/food_items`,
      httpOptions
    );

    // console.log(foods);
    return foods;
  };

  getByDate = (date: Date): Observable<FoodList[]> => {
    let foods: Observable<FoodList[]>;

    foods = this.http.get<FoodList[]>(
      `${this.baseUrl}/food_items/${date}`,
      httpOptions
    );

    // console.log(foods);
    return foods;
  };

  save = (food: FoodList): Observable<FoodList> => {
    let item: Observable<FoodList>;

    if (food.id) {
      const url = `${this.baseUrl}/food_items/${food.id}`;
      console.log(food);

      item = this.http.put<FoodList>(url, food, httpOptions);

      return item;
    } else {
      console.log(food);
      item = this.http.post<FoodList>(
        `${this.baseUrl}/food_items`,
        food,
        httpOptions
      );
    }
    return item;
  };

  delete = (food: FoodList): Observable<FoodList> => {
    let item: Observable<FoodList>;

    if (food.id) {
      const url = `${this.baseUrl}/food_items/${food.id}`;
      console.log(food);

      item = this.http.put<FoodList>(url, food, httpOptions);

      return item;
    } else {
      console.log(food);
      item = this.http.post<FoodList>(
        `${this.baseUrl}/food_items`,
        food,
        httpOptions
      );
    }
    return item;
  };
}
