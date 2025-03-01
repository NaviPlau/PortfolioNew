import { Injectable, ElementRef, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollIntoService {

  constructor() { }

  observeElement(element: ElementRef, renderer: Renderer2, animationClass: string) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          renderer.addClass(element.nativeElement, animationClass);
        } else {
          renderer.removeClass(element.nativeElement, animationClass);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(element.nativeElement);
  }
}

