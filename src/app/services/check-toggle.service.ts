import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckToggleService {

  constructor() { }

 toggle(isToggled: boolean){
    isToggled = !isToggled
  }
}
