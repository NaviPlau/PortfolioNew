import { Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { CommonModule } from '@angular/common';
import { LightDarkService } from '../../services/lightmodus/light-dark.service';
import { LangService } from '../../services/language/lang.service';
@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [MatIconModule, CommonModule, ClickOutsideDirective],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
  animations: [
    trigger('swipeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }), 
        animate(
          '150ms ease-out',
          keyframes([
            style({ opacity: 0.5, offset: 0.3 }), 
            style({ opacity: 0.8, offset: 0.6 }),  
            style({ opacity: 1, offset: 1 })  
          ])
        )
      ]),
      transition(':leave', [
        animate('100ms ease-in', style({ opacity: 0 })) 
      ])
    ]),
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('250ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })) 
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' })) 
      ])
    ])
  ]
})
export class BurgerMenuComponent {
  menuHidden = true;
  links = computed(() =>
    this.lang.language() === 'de'
      ? ['Über mich', 'Fähigkeiten', 'Projekte', 'Referenzen', 'Kontakt']
      : ['About me', 'Skillset', 'Projects', 'References', 'Contact']
  );
  hoveredIndex: number = -1;
  swipeDirectionIndex: number = 0;
  swipeDirections = ['up', 'left', 'right', 'down']; 
  colors = ['#FFEEEE', '#FFB3B3', '#FF6666', '#D62C2C']; 
  lightmodus = inject(LightDarkService);
  lang = inject(LangService);

  ngOnInit() {
    setInterval(() => {
      this.swipeDirectionIndex = (this.swipeDirectionIndex + 1) % this.swipeDirections.length;
    }, 200);
  }

  getSwipeIcon(): string {
    return `swipe_${this.swipeDirections[this.swipeDirectionIndex]}`;
  }

  getSwipeColor(): string {
    return this.colors[this.swipeDirectionIndex];
  }

  closeMenu = () => {
    this.menuHidden = true
  }
}
