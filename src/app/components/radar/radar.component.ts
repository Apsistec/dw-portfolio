import { style } from "@angular/animations";
import { Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import { map } from "rxjs";
import { ThemeService } from "src/app/services/theme/theme.service";

export type ChartOptions = {
  series: any;
  chart: any;
  title: any;
  stroke: any;
  fill: any;
  markers: any;
  xaxis: any;
  yaxis: any;
  legend: any;
};

@Component({
    selector: "app-radar",
    templateUrl: "./radar.component.html",
    styleUrls: ["./radar.component.scss"],
    standalone: false
})
export class RadarComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private themeService: ThemeService) {
    this.chartOptions = {
      series: [
        {
          name: "Angular",
          data: [100, 100, 100, 100, 35, 100, 100, 100],
          color: "#6C0009",
        },
        {
          name: "Ionic",
          data: [50, 100, 100, 100, 20, 100, 100, 100],
          color: "#000075",
        },
        {
          name: "React",
          data: [0, 0, 0, 0, 65, 0, 0, 0],
          color: "#006C09",
        },
      ],
      chart: {
        height: 350,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 4,
          top: 4,
        },
      },
      legend: {
        show: true,
        labels: {
          colors: this.themeService.getThemeIsDark() ? "grey" : "#fff",
        },
      },
      title: {
        text: "Framework Usage (%) by Year",
        align: "center",
        style: {
          color: this.themeService.getThemeIsDark() ? "grey" : "#fff",
        },
      },
      stroke: {
        width: 5,
        useSeriesColors: true,
      },
      fill: {
        opacity: 0.4,
        useSeriesColors: true,
      },
      markers: {
        size: 5,
        useSeriesColors: true,
      },
      xaxis: {
        categories: [
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
          "2024",
        ],
        dataLabels: {
          enabled: true,
          background: {
            enabled: true,
            borderRadius: 2,
          },
        },
        labels: {
          style: {
            colors: [
              "grey",
              "grey",
              "grey",
              "grey",
              "grey",
              "grey",
              "grey",
              "grey",
            ],
          },
        },
      },
    };
  }
}
