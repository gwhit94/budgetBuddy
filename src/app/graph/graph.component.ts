import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})


export class GraphComponent implements OnInit {
  chart: any;
  constructor() { }

  ngOnInit() {
    this.chart = new Chart('myChart', {
      // The type of chart we want to create
      type: 'doughnut',
  
      // The data for our dataset
      data: {
        labels: ['Housing', 'Bills', 'Transportation', 'Entertainment', 'Food/Groceries', 'Savings', 'Other'],
        datasets: [{
          label: 'Budget Buddy',
          data: [0, 10, 5, 2, 20, 30, 45],
          backgroundColor: ['rgb(255, 99, 132)'],
          borderColor: ['rgb(255, 99, 132)'],
          borderWidth: 1
        }]
      },
  
      // Configuration options go here
      options: {}
    });

  }

}

