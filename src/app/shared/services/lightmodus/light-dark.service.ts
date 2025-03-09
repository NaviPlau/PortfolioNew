import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightDarkService {
  light = signal(true)
  dark = signal(false)
  constructor() {
     
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.light.set(false)
      this.dark.set(true)
      this.setScrollbarColor();
    }else{
      this.light.set(JSON.parse(localStorage.getItem('mode') || 'false'))
      this.setScrollbarColor();
    }
  }

  toggle() {
    this.light.set(!this.light())
    this.dark.set(!this.dark())
    localStorage.setItem('mode', JSON.stringify(this.light()));
    this.setScrollbarColor();
  }

  setScrollbarColor() {
    document.documentElement.classList.remove('scrollbar-light', 'scrollbar-dark');
    requestAnimationFrame(() => {
      if (this.light()) {
        document.documentElement.classList.add('scrollbar-light');
      } else {
        document.documentElement.classList.add('scrollbar-dark'); 
      }
    });
  }
}
