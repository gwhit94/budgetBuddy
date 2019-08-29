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
  incomeTotal: number;
  expensesTotal: number;
  housingTotal: number;
  transportationTotal: number;
  billsTotal: number;
  entertainmentTotal: number;
  foodTotal: number;
  savingsTotal: number;
  otherTotal: number;

  

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

ngOnInit() {
  this.allExpenses = [...this.addService.allExpenses];
  this.allIncome = [...this.addService.allIncome]; 
}

}
