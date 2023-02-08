import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor() {}
  goBackOneDate = (date: Date): Date => {
    let newDate = new Date(date.setDate(date.getDate() - 1));

    return newDate;
  };

  goForwardOneDate = (date: Date): Date => {
    let newDate = new Date(date.setDate(date.getDate() + 1));
    console.log(newDate);

    return newDate;
  };
}
