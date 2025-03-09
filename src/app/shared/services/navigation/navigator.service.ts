import { ElementRef, inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollIntoService } from '../scroll-view/scroll-into.service';
@Injectable({
  providedIn: 'root'
})
export class NavigatorService {
  router = inject(Router)
  scrollService = inject(ScrollIntoService)


  constructor() { }

  navigateTo(route: string, elementId: string | null) {
    if (this.router.url !== route) {
      this.router.navigate([route]).then(() => {
        if (elementId) {
            this.scrollService.navigatorScroll(elementId);
        }
      });
    }
  }

}
