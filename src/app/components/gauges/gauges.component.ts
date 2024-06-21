import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import { ThemeService } from "src/app/services/theme/theme.service";
export type ChartOptions = {
  series: any;
  chart: any;
  plotOptions: any;
  labels: any;
  fill: any;
  stroke: any;
};

@Component({
  selector: "app-gauges",
  templateUrl: "./gauges.component.html",
  styleUrls: ["./gauges.component.scss"],
})
export class GaugesComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  chartOptions!: Partial<ChartOptions>;
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.chartOptions = {
      series: [67],
      chart: {
        height: 150,
        type: "radialBar",
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
              fontSize: "12px",
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Angular"],
    };
  }
}