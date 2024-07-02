import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexLegend,
  ApexPlotOptions,
  ApexTitleSubtitle,
} from "ng-apexcharts";
import { map, Subject, Subscription } from "rxjs";
import { ThemeService } from "src/app/services/theme/theme.service";

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   dataLabels: ApexDataLabels;
//   plotOptions: ApexPlotOptions;
//   xaxis: ApexXAxis;
//   colors: string[];
//   legend: ApexLegend;
//   title: ApexTitleSubtitle;
// };
export type ChartOptions = {
  series: any;
  chart: any;
  dataLabels: any;
  plotOptions: any;
  xaxis: any;
  yaxis: any;
  colors: any;
  legend: any;
  title: any;
};

@Component({
  selector: "app-gauges",
  templateUrl: "./gauges.component.html",
  styleUrls: ["./gauges.component.scss"],
})
export class GaugesComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  isDark!: string;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "Tech",
          data: [20, 30, 40, 50, 60, 70],
        },
      ],
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          barHeight: "80%",
          isFunnel: true,
        },
      },
      yaxis: {
        show: true,

        labels: {
          formatter: function (val: any) {
            return val + "%";
          },
        },
      },
      colors: [
        "#6C0009",
        "#6C6C09",
        "#006C09",
        "#006C75",
        "#000075",
        "#6C0075",
      ],
      dataLabels: {
        enabled: true,
        formatter: function (val: any, opt: any) {
          return opt.w.globals.labels[opt.dataPointIndex];
        },
        dropShadow: {
          enabled: true,
        },
      },
      title: {
        text: "Tech Stack Hierarchy",
        align: "center",
        style: {
          color: this.themeService.getThemeIsDark() ? "grey" : "#000",
        },
      },
      xaxis: {
        categories: [
          "Ionic",
          "Angular",
          "TypeScript",
          "JavaScript",
          "CSS",
          "HTML",
        ],
      },
      legend: {
        show: false,
      },
    };
  }
}
