import { Injectable } from '@angular/core';
import { Meal } from '../models/meal';
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
export class MealService {
  baseUrl: string = 'http://localhost:5128';
  constructor(private http: HttpClient) {}

  getAll = (): Observable<Meal[]> => {
    let meals: Observable<Meal[]>;

    meals = this.http.get<Meal[]>(`${this.baseUrl}/meals`, httpOptions);

    return meals;
  };
}
