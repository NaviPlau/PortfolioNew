import { Component, computed, inject, signal, HostListener } from '@angular/core';
import { LightDarkService } from '../shared/services/lightmodus/light-dark.service';
import { CommonModule } from '@angular/common';
import { LangService } from '../shared/services/language/lang.service';
import { MatIcon } from '@angular/material/icon';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ScrollIntoService } from '../shared/services/scroll-view/scroll-into.service';
import { TextHeroService } from '../shared/services/text-data/text-hero.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [
    trigger('wavingAnimation', [
      state('default', style({ 
        opacity: 0, 
        transform: 'translateX(0px) rotate(0deg)', 
        transformOrigin: 'center'
      })),
      state('hover', style({ 
        opacity: 1, 
        transform: 'translateX(50px) rotate(360deg)',  
        transformOrigin: 'center'
      })),
      transition('default => hover', animate('0.5s ease-in-out')),
      transition('hover => default', animate('0.5s ease-in-out'))
    ])
  ]
})
export class HeroComponent {
  lightmodus = inject(LightDarkService);
  lang = inject(LangService);
  scrollService = inject(ScrollIntoService);
  text = inject(TextHeroService);
  hoveredButton = signal(false);

  isMobile = signal(this.detectMobile()); 
  animationState = signal<'default' | 'hover'>('default'); 
  iconColor = computed(() => this.lightmodus.light() ? 
    (this.animationState() === 'hover' ? '#ff834f' : '#89BCD9') :  
    (this.animationState() === 'hover' ? 'white' : '#3dcfb6')     
  );

  constructor() {
    if (this.isMobile()) {
      setTimeout(() => this.animationState.set('hover'), 500); 
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile.set(this.detectMobile());
  }

  detectMobile(): boolean {
    return window.matchMedia('(pointer: coarse)').matches; 
  }

  onMouseEnter() {
    if (!this.isMobile()) {
      this.animationState.set('hover');
    }
  }

  onMouseLeave() {
    if (!this.isMobile()) {
      this.animationState.set('default');
    }
  }

  onButtonClick() {
    if (this.isMobile()) {
      this.animationState.set('hover');
    }
  }
}



