import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface MyData {
  isDark: boolean;
}

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private dataSubject = new BehaviorSubject<MyData | null>(null);
  data$ = this.dataSubject.asObservable();

  setData(newData: MyData) {
    this.dataSubject.next(newData);
  }

  getIsDark() {
    return this.data$.subscribe((data) => {
      if (data) {
        if (data.isDark) {
          return true;
        } else {
          return false;
        }
      } else {
        return undefined;
      }
    });
  }
}
