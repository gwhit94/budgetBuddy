import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  allIncome: Object[] = [];
  allExpenses: Object[] = [];

  constructor() { }

  addToIncome(desc, amount) {
    let income = {
      description: desc,
      amount: amount,
      recurring: false,
      user_id: 1
    }
    this.allIncome.push(income);
  }

  addToExpenses(desc, amount, type) {
    let expense = {
      description: desc,
      amount: amount,
      recurring: false,
      type_id: type,
      user_id: 1
    }
    this.allExpenses.push(expense);
  }


}
