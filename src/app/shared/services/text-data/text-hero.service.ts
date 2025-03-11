import { computed, inject, Injectable } from '@angular/core';
import { LangService } from '../language/lang.service';

@Injectable({
  providedIn: 'root'
})
export class TextHeroService {
  lang = inject(LangService)

  constructor() { }

  buttonText() {
    return this.lang.language() === 'de' ? 'Kontaktieren Sie mich' : 'Contact Me'
  }

  title = computed(() =>(this.lang.language() === 'de' ? "Hallo, ich bin Paul Ivan" : "Hi, I'm Paul Ivan"));
  subtitle = computed(() =>(this.lang.language() === 'de' ? "Fullstack Entwickler" : "Fullstack Developer"));
  titleChars = computed(() => [...this.title()]);
  subtitleChars = computed(() => [...this.subtitle()]);
  arrowText = computed(() =>(this.lang.language() === 'de' ? "Runterscrollen" : "Scroll down"));
}
