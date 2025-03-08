import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  language = signal('en');

  constructor() {
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      this.language.set(storedLang); 
    } else {
      const browserLang = navigator.language || (navigator as any).userLanguage;
      const isGerman = browserLang.startsWith('de');

      this.language.set(isGerman ? 'de' : 'en')
      localStorage.setItem('lang', this.language()); 
    }
  }

  toggleLanguage() {
    this.language.set(this.language() === 'en' ? 'de' : 'en');
    localStorage.setItem('lang', this.language());
  }
}
