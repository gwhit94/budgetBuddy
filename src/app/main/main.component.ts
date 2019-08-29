import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IncomeComponent } from '../income/income.component';
import { ExpensesComponent } from '../expenses/expenses.component';
import { AddService } from '../add.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  {

  allIncome: Array<Object> = [];
  allExpenses: Array<Object> = [];

  step = 0;

  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }

  constructor(public dialog: MatDialog, private addService: AddService) { }

  addIncome(): void {
    const dialogRef = this.dialog.open(IncomeComponent, {
      width: '70vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.allIncome = [...this.addService.allIncome];
    });
  }

  addExpense(): void {
    const dialogRef = this.dialog.open(ExpensesComponent, {
      width: '70vw',
    });
 
    dialogRef.afterClosed().subscribe(result => {
      this.allExpenses = [...this.addService.allExpenses];
    });
  }

  get expendableTotal() {
    let expendable = 0;
    this.allIncome.forEach(x => {
      let income = parseInt(x["amount"]);
      expendable += income;
    })
    this.allExpenses.forEach(x => {
      let expenses = parseInt(x["amount"]);
      expendable -= expenses;
    })
    return expendable;
  }

  get incomeTotal() {
    let total = 0;
    this.allIncome.forEach(x => {
      let income = parseInt(x["amount"]);
      total += income;

    })
    return total;
  }

  get expensesTotal() {
    let total = 0;
    this.allExpenses.forEach(x => {
      let expense = parseInt(x["amount"]);
      total += expense
    })
    return total;
  }

  get housingTotal() {
    let total = 0;
    this.allExpenses.forEach(x => {
      if (x["type_id"] === "Housing") {
        let expense = parseInt(x["amount"]);
        total += expense
      }
    })
    return total;
  }

  get transportationTotal() {
    let total = 0;
    this.allExpenses.forEach(x => {
      if (x["type_id"] === "Transportation") {
        let expense = parseInt(x["amount"]);
        total += expense
      }
    })
    return total;
  }

  get billsTotal() {
    let total = 0;
    this.allExpenses.forEach(x => {
      if (x["type_id"] === "Bills") {
        let expense = parseInt(x["amount"]);
        total += expense
      }
    })
    return total;
  }

  get entertainmentTotal() {
    let total = 0;
    this.allExpenses.forEach(x => {
      if (x["type_id"] === "Entertainment") {
        let expense = parseInt(x["amount"]);
        total += expense
      }
    })
    return total;
  }

  get foodTotal() {
    let total = 0;
    this.allExpenses.forEach(x => {
      if (x["type_id"] === "Food/Groceries") {
        let expense = parseInt(x["amount"]);
        total += expense
      }
    })
    return total;
  }

  get savingsTotal() {
    let total = 0;
    this.allExpenses.forEach(x => {
      if (x["type_id"] === "Savings") {
        let expense = parseInt(x["amount"]);
        total += expense
      }
    })
    return total;
  }

  get otherTotal() {
    let total = 0;
    this.allExpenses.forEach(x => {
      if (x["type_id"] === "Other") {
        let expense = parseInt(x["amount"]);
        total += expense
      }
    })
    return total;
  }

ngOnInit() {
  this.allExpenses = [...this.addService.allExpenses];
  this.allIncome = [...this.addService.allIncome]; 
}

}
