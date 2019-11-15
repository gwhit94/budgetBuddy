import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddService } from '../add.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
<<<<<<< HEAD

  incomeDescription: string;
  incomeAmount: number;
  incomeRecurring: number;

=======
  incomeDescription: string;
  incomeAmount: number;
  incomeRecurring: number;
>>>>>>> 8286694adb5b0bb2e4c6fb199a25e8ddf89db028

  constructor(
    public dialogRef: MatDialogRef<IncomeComponent>,
    private addService: AddService,

    @Inject(MAT_DIALOG_DATA) public data: any
    ) 
    { }

    onNoClick(): void {
      this.dialogRef.close();
    }

    addToIncome() {
      let user = JSON.parse(localStorage.getItem('currentUser'));
      let userId = user.id;
      this.addService.addToIncome(this.incomeDescription, this.incomeAmount, this.incomeRecurring, userId);
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
