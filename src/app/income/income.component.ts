import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<IncomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) 
    { }

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
