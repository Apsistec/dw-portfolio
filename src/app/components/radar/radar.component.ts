import { style } from "@angular/animations";
import { Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
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
  grid: any;
};

@Component({
  selector: "app-radar",
  templateUrl: "./radar.component.html",
  styleUrls: ["./radar.component.scss"],
})
export class RadarComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private themeService: ThemeService) {
    this.chartOptions = {
      grid: {
        show: true,
        borderColor: "var(--ion-color-medium)",
      },
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
          colors: this.themeService.getIsDark() ? "#fff" : "#000",
        },
      },
      title: {
        text: "Framework Usage (%) by Year",
        align: "center",
        style: {
          color: this.themeService.getIsDark() ? "#fff" : "#000",
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
      yaxis: {
        labels: {
          show: true,
          style: {
            colors: "var(--ion-color-medium-tint)",
          },
        },
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
        labels: {
          show: true,
          colors: this.themeService.getIsDark() ? "#fff" : "#000",
        },
        title: {
          text: "Year",
        },
        dataLabels: {
          enabled: true,
          background: {
            enabled: true,
            borderRadius: 2,
          },
        },
      },
    };
  }
}
