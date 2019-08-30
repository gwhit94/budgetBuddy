import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddService {

  apiUrl: string;
  allIncome: Object[] = [];
  allExpenses: Object[] = [];

  constructor(private http: HttpClient) { }

  addToIncome(desc, amount, recurring, userId) {
    let income = {
      description: desc,
      amount: amount,
      recurring: recurring,
      user_id: userId,
      id: null
    }
    this.apiUrl = "/api/income/add";
    return this.http.post(this.apiUrl, income).subscribe(
        result => this.allIncome.push(result)
        );
  }
  // deleteFromIncome(id) {
  //   this.apiUrl = `/api/income/delete/${id}`;
  //   return this.http.delete(this.apiUrl).subscribe(
  //       result => this.allIncome.push(result)
  //       );
  // }

  addToExpenses(desc, amount, recurring, type, userId) {
    let expense = {
      description: desc,
      amount: amount,
      recurring: recurring,
      type_id: type,
      user_id: userId
    }
    this.apiUrl = "/api/expenses/add";
    return this.http.post(this.apiUrl, expense).subscribe(
      result => this.allExpenses.push(result));
  }


}
