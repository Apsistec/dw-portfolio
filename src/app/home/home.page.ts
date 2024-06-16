import { Component, ViewChild } from "@angular/core";
import { IonContent } from "@ionic/angular";
import { EChartsOption } from "echarts";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage {
  showBackToTopFab = false;

  @ViewChild(IonContent, { static: false })
  content!: IonContent;
  scrollEnd = false;
 
  options: EChartsOption = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },      
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',      
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Counters',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220],
      },
    ],
  };

  ngOnInit(): void {

  };

  onScrollEnd(ev: Event) {
    this.scrollEnd = true;
    this.showBackToTopFab =
      (ev as CustomEvent).detail.scrollTop > 200 ? true : false;
  }

  scrollToId(id: any) {
    const element: any = document.getElementById(id);
    this.content.scrollToPoint(0, element.offsetTop - 45, 750);
  }

  scrollToTop() {
    this.content.scrollToTop(750).then(() => {
      this.scrollEnd = false;
    });
  }
}
