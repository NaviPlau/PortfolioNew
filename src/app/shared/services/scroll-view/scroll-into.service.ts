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


  scrollToElement(element: ElementRef | null, offset: number | null) {
    if (element && element.nativeElement) {
      if(offset == null) offset = 100
      window.scrollTo({
        top: element.nativeElement.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    }
  }

  navigatorScroll(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        console.log('Element not found');
    }
  }

  mainScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

