import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddService } from '../add.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  expenseDescription: string;
  expenseAmount: number;
  expenseType: string;
  expenseRecurring: number;


  constructor(
    public dialogRef: MatDialogRef<ExpensesComponent>,
    private addService: AddService,

    @Inject(MAT_DIALOG_DATA) public data: any
    ) 
    { }

    onNoClick(): void {
      this.dialogRef.close();
    }

    addExpense() {
      let user = JSON.parse(localStorage.getItem('currentUser'));
      let userId = user.id;
      this.addService.addToExpenses(this.expenseDescription, this.expenseAmount, this.expensesRecurring, this.expenseType, userId);
      this.dialogRef.close();
    }


  ngOnInit() {
  }

}
