import { Component, computed, inject, signal, HostListener } from '@angular/core';
import { LightDarkService } from '../shared/services/lightmodus/light-dark.service';
import { CommonModule } from '@angular/common';
import { LangService } from '../shared/services/language/lang.service';
import { MatIcon } from '@angular/material/icon';
import { animate, state, style, transition, trigger } from '@angular/animations';

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

  title = computed(() =>(this.lang.language() === 'de' ? "Hallo, ich bin Paul Ivan" : "Hi, I'm Paul Ivan"));
  subtitle = computed(() =>(this.lang.language() === 'de' ? "Fullstack Entwickler" : "Fullstack Developer"));

  titleChars = computed(() => [...this.title()]);
  subtitleChars = computed(() => [...this.subtitle()]);

  hoveredButton = signal(false);
  isMobile = signal(this.detectMobile()); 
  animationState = signal<'default' | 'hover'>('default'); 

  // Define colors based on light/dark mode
  iconColor = computed(() => this.lightmodus.light() ? 
    (this.animationState() === 'hover' ? '#ff834f' : '#89BCD9') :  // Light mode: hover = #89BCD9, default = #ff834f
    (this.animationState() === 'hover' ? 'white' : '#3dcfb6')       // Dark mode: hover = #3dcfb6, default = white
  );

  constructor() {
    if (this.isMobile()) {
      setTimeout(() => this.animationState.set('hover'), 500); // Play animation once on mobile
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile.set(this.detectMobile());
  }

  detectMobile(): boolean {
    return window.matchMedia('(pointer: coarse)').matches; // Detect touchscreens
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
      this.animationState.set('hover'); // Ensure animation plays if the button is tapped
    }
  }
}



