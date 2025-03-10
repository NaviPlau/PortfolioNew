import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appLazyload]',
  standalone: true
})
export class LazyloadDirective {

  @Output() isVisible = new EventEmitter<boolean>();

  private observer: IntersectionObserver;

  constructor(private el: ElementRef) {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible.emit(true);
          this.observer.disconnect();
        }
      });
    }, { threshold: 0.1 });

    this.observer.observe(this.el.nativeElement);
  }
}
