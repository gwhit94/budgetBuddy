import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})


export class GraphComponent implements OnInit {

  chart: any;
  expTotal: number;
  hTotal: number;
  bTotal: number;
  tTotal: number;
  eTotal: number;
  fTotal: number;
  sTotal: number;
  oTotal: number;

  constructor() { }

  getChart() {
    this.chart = new Chart('myChart', {
      type: 'doughnut',

      data: {
        labels: ['Expendable Income', 'Housing', 'Bills', 'Transportation', 'Entertainment', 'Food/Groceries', 'Savings', 'Other'],
        datasets: [{
          label: 'Budget Buddy',
          data: [this.expTotal, this.hTotal, this.bTotal, this.tTotal, this.eTotal, this.fTotal, this.sTotal, this.oTotal],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(243, 45, 34, 0.2)'
          ],
          borderColor: ['rgb(255, 99, 132)'],
          borderWidth: 4
        }]
      },
      options: {}
    });
  }


  @Input()
  set expendableTotal(expendableTotal: number) {
    this.expTotal = expendableTotal;
    this.getChart();
  }
  @Input()
  set housingTotal(housingTotal: number) {
    this.hTotal = housingTotal;
    this.getChart();
  }
  @Input()
  set billsTotal(billsTotal: number) {
    this.bTotal = billsTotal;
    this.getChart();
  }
  @Input()
  set transportationTotal(transportationTotal: number) {
    this.tTotal = transportationTotal;
    this.getChart();
  }
  @Input()
  set entertainmentTotal(entertainmentTotal: number) {
    this.eTotal = entertainmentTotal;
    this.getChart();
  }
  @Input()
  set foodTotal(foodTotal: number) {
    this.fTotal = foodTotal;
    this.getChart();
  }
  @Input()
  set savingsTotal(savingsTotal: number) {
    this.sTotal = savingsTotal;
    this.getChart();
  }
  @Input()
  set otherTotal(otherTotal: number) {
    this.oTotal = otherTotal;
    this.getChart();
  }

  ngOnInit() {
    this.getChart();
  }

}

