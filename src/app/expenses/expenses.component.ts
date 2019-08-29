import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddService } from '../add.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  expenseAmount: number;

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
      this.addService.addToExpenses(desc, amount, recurring, type);
      this.dialogRef.close();
    }


  ngOnInit() {
  }

}
