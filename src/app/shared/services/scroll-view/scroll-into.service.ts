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
    }, { threshold: 0.05 });
    observer.observe(element.nativeElement);
  }


  scrollToElement(element: ElementRef, offset: number = 100) {
    if (element && element.nativeElement) {
      window.scrollTo({
        top: element.nativeElement.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    }
  }

  mainScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

