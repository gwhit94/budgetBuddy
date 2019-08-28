import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExpensesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) 
    { }

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
