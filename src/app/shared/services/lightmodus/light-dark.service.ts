import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightDarkService {
  light = signal(true)
  dark = signal(false)
  constructor() { 
    this.light.set(JSON.parse(localStorage.getItem('mode') || 'false'))
  }

  toggle() {
    this.light.set(!this.light())
    this.dark.set(!this.dark())
    localStorage.setItem('mode', JSON.stringify(this.light()));

  }
}
