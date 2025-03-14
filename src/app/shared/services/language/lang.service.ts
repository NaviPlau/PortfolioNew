import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  language = signal('en');
  router = inject(Router);

  constructor() {
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      this.language.set(storedLang);
      this.redirectLocalizedRoute();
    } else {
      const browserLang = navigator.language || (navigator as any).userLanguage;
      const isGerman = browserLang.startsWith('de');

      this.language.set(isGerman ? 'de' : 'en')
      localStorage.setItem('lang', this.language());
      this.redirectLocalizedRoute();
    }
  }

  toggleLanguage() {
    this.language.set(this.language() === 'en' ? 'de' : 'en');
    localStorage.setItem('lang', this.language());
    this.redirectLocalizedRoute();
    document.documentElement.lang = this.language();
  }

  redirectLocalizedRoute() {
    const url = this.router.url;
    if (this.language() === 'de') {
      if (url === '/privacy-policy') this.router.navigate(['/datenschutz']);
      else if (url === '/legal-notice') this.router.navigate(['/impressum']);
    } else {
      if (url === '/datenschutz') this.router.navigate(['/privacy-policy']);
      else if (url === '/impressum') this.router.navigate(['/legal-notice']);
    }
  }
}
