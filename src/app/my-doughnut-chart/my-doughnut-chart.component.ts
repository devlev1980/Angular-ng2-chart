import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.scss']
})
export class MyDoughnutChartComponent implements OnInit {
  public doughnutChartLabels = ['Sales 01', 'Sales 02', 'Sales 03', 'Sales 04'];
  public doughnutChartType = 'doughnut';

  public doughnutChartData = [150, 120, 30, 45];

  constructor() {
  }

  ngOnInit() {
  }

}
