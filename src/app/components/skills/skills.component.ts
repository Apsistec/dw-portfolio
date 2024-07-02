import { Component, OnInit } from "@angular/core";
import { arrayData } from "./data-series";
import { ThemeService } from "src/app/services/theme/theme.service";
import { map, Subscription } from "rxjs";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

var colors = ["#6C0009", "#6C6C09", "#006C09", "#006C75", "#000075", "#6C0075"];

export type ChartOptions = {
  series: any;
  chart: any;
  dataLabels: any;
  plotOptions: any;
  yaxis: any;
  xaxis: any;
  grid: any;
  subtitle: any;
  colors: any;
  states: any;
  title: any;
  legend: any;
  tooltip: any; //ApexTooltip;
  labels: any;
  responsive: any;
};

declare global {
  interface Window {
    Apex: any;
  }
}

window.Apex = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    shared: false,
  },
  legend: {
    show: false,
  },
};

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit {
  dataSet = arrayData;
  public chartOptions!: Partial<ChartOptions>;
  public chartQuarterOptions!: Partial<ChartOptions>;

  constructor(private themeService: ThemeService) {}
  ngOnInit() {
    /* Main Chart */
    this.chartOptions = {
      series: [
        {
          name: "year",
          data: this.makeData(),
        },
      ],
      chart: {
        id: "barYear",
        height: 400,
        width: "100%",
        type: "bar",
        events: {
          dataPointSelection: (e: any, chart: any, opts: any) => {
            var quarterChartEl = document.querySelector("#chart-quarter");
            var yearChartEl = document.querySelector("#chart-year");

            if (opts.selectedDataPoints[0].length === 1) {
              if (quarterChartEl?.classList.contains("active")) {
                this.updateQuarterChart(chart, "barQuarter");
              } else {
                yearChartEl?.classList.add("chart-quarter-activated");
                quarterChartEl?.classList.add("active");
                this.updateQuarterChart(chart, "barQuarter");
              }
            } else {
              this.updateQuarterChart(chart, "barQuarter");
            }

            if (opts.selectedDataPoints[0].length === 0) {
              yearChartEl?.classList.remove("chart-quarter-activated");
              quarterChartEl?.classList.remove("active");
            }
          },
          updated: (chart: any) => {
            this.updateQuarterChart(chart, "barQuarter");
          },
        },
      },
      plotOptions: {
        bar: {
          distributed: true,
          horizontal: true,
          barHeight: "90%",
          dataLabels: {
            position: "bottom",
          },
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: [this.themeService.getThemeIsDark() ? "#fff" : "#000"],
        },
        formatter: function (val: any, opt: any) {
          return opt.w.globals.labels[opt.dataPointIndex];
        },
        offsetX: 0,
        dropShadow: {
          enabled: true,
        },
      },

      colors: colors,

      states: {
        normal: {
          filter: {
            type: "desaturate",
          },
        },
        active: {
          allowMultipleDataPointsSelection: true,
          filter: {
            type: "darken",
            value: 1,
          },
        },
      },
      tooltip: {
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (val: any, opts: any) {
              return opts.w.globals.labels[opts.dataPointIndex];
            },
          },
        },
      },
      title: {
        text: "Skills",
        offsetX: 15,
        style: {
          color: this.themeService.getThemeIsDark() ? "#fff" : "#000",
        },
      },
      subtitle: {
        text: "(Click on bar to see details)",
        offsetX: 15,
        style: {
          color: this.themeService.getThemeIsDark() ? "#fff" : "#000",
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    };

    /* Secondary Chart */
    this.chartQuarterOptions = {
      series: [
        {
          name: "quarter",
          data: [],
        },
      ],
      chart: {
        id: "barQuarter",
        height: 400,
        width: "100%",
        type: "bar",
        stacked: true,
      },
      plotOptions: {
        bar: {
          columnWidth: "90%",
          horizontal: false,
        },
      },
      legend: {
        show: false,
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      title: {
        text: "Quarterly Results",
        align: "center",
        style: {
          color: this.themeService.getThemeIsDark() ? "#fff" : "#000",
        },
      },
      tooltip: {
        x: {
          formatter: function (val: any, opts: any) {
            return opts.w.globals.seriesNames[opts.seriesIndex];
          },
        },
        y: {
          title: {
            formatter: function (val: any, opts: any) {
              return opts.w.globals.labels[opts.dataPointIndex];
            },
          },
        },
      },
    };
  }

  public makeData(): any {
    var dataYearSeries = [
      {
        x: "2011",
        y: this.dataSet[0].y,
        color: colors[0],
        quarters: this.dataSet[0].quarters,
      },
      {
        x: "2012",
        y: this.dataSet[1].y,
        color: colors[1],
        quarters: this.dataSet[1].quarters,
      },
      {
        x: "2013",
        y: this.dataSet[2].y,
        color: colors[2],
        quarters: this.dataSet[2].quarters,
      },
      {
        x: "2014",
        y: this.dataSet[3].y,
        color: colors[3],
        quarters: this.dataSet[3].quarters,
      },
      {
        x: "2015",
        y: this.dataSet[4].y,
        color: colors[4],
        quarters: this.dataSet[4].quarters,
      },
      {
        x: "2016",
        y: this.dataSet[5].y,
        color: colors[5],
        quarters: this.dataSet[5].quarters,
      },
    ];

    return dataYearSeries;
  }

  public updateQuarterChart(
    sourceChart: any,
    destChartIDToUpdate: string | number
  ) {
    var series = [];
    var seriesIndex = 0;
    var colors = [];

    if (sourceChart.w.globals.selectedDataPoints[0]) {
      var selectedPoints = sourceChart.w.globals.selectedDataPoints;
      for (var i = 0; i < selectedPoints[seriesIndex].length; i++) {
        var selectedIndex = selectedPoints[seriesIndex][i];
        var yearSeries = sourceChart.w.config.series[seriesIndex];
        series.push({
          name: yearSeries.data[selectedIndex].x,
          data: yearSeries.data[selectedIndex].quarters,
        });
        colors.push(yearSeries.data[selectedIndex].color);
      }

      if (series.length === 0)
        series = [
          {
            data: [],
          },
        ];

      return window.ApexCharts.exec(destChartIDToUpdate, "updateOptions", {
        series: series,
        colors: colors,
        fill: {
          colors: colors,
        },
      });
    }
  }
}
