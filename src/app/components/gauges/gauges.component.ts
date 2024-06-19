import { Component, OnInit, ViewChild } from '@angular/core';
import { color } from 'echarts';
import { ApexOptions, ChartComponent } from 'ng-apexcharts';
import { DataService } from 'src/app/services/data.service';
export type ChartOptions = {
  series: any;
  chart: any;
  plotOptions: any;
  labels: any;
  fill: any;
  stroke: any;
};


@Component({
  selector: 'app-gauges',
  templateUrl: './gauges.component.html',
  styleUrls: ['./gauges.component.scss'],
})
export class GaugesComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  chartOptions!: Partial<ChartOptions>;
  constructor(private themeService: DataService) { }

  ngOnInit() {
    this.chartOptions = {
      series: [67],
      chart: {
        height: 150,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              show: true,

            },
            value: {
              show: true,
              offsetY: 0,
              fontSize: '12px',
            }
          }
        }
      },
      stroke: {
        lineCap: 'round',
      },
      labels: ['Angular'],
    };
  }

}
