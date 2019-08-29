import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddService } from '../add.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  incomeAmount: number;

  constructor(
    public dialogRef: MatDialogRef<IncomeComponent>,
    private addService: AddService,

    @Inject(MAT_DIALOG_DATA) public data: any
    ) 
    { }

    onNoClick(): void {
      this.dialogRef.close();
    }

    addToIncome(desc, amount, recurring) {
      this.addService.addToIncome(desc, amount, recurring);
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
