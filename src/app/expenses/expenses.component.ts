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

    addExpense(desc, amount, recurring, type) {
      let user = JSON.parse(localStorage.getItem('currentUser'));
      let userId = user.id;
      this.addService.addToExpenses(desc, amount, recurring, type, userId);
      this.dialogRef.close();
    }


  ngOnInit() {
  }

}
