import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.scss']
})
export class MyBarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [54, 45, 56, 76, 88, 99, 40], label: 'Series A'},
    {data: [21, 12, 4, 54, 87, 94, 45], label: 'Series B'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
