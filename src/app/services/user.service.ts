import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = 'http://localhost:5128';
  constructor(private http: HttpClient) {}

  getAll = (): Observable<User> => {
    let user: Observable<User>;

    user = this.http.get<User>(`${this.baseUrl}/users`, httpOptions);

    return user;
  };

  getById = (): Observable<User> => {
    let user: Observable<User>;

    user = this.http.get<User>(`${this.baseUrl}/users/1`, httpOptions);

    return user;
  };
}
