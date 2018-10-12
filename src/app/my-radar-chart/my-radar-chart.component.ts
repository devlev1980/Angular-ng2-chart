import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.scss']
})
export class MyRadarChartComponent implements OnInit {
  public radarChartLabels = ['01', '02', '03', '04'];
  public radarChartData = [
    {data: [120, 230, 430, 40, 70], label: '2017'},
    {data: [110, 235, 420, 69, 90], label: '2018'}
  ];
  public  radarChartType = 'radar';

  constructor() {
  }

  ngOnInit() {
  }

}
