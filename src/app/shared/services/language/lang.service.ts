import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  language = signal('en');
    constructor() { 
      this.language.set(localStorage.getItem('lang') || 'en');
    }
  
    toggleLanguage() {
      this.language.set(this.language() === 'en' ? 'de' : 'en');
      localStorage.setItem('lang', this.language());
      console.log(this.language());
      
    }
 
}
