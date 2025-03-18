import { Component, computed, ElementRef, inject, Renderer2, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightDarkService } from '../shared/services/lightmodus/light-dark.service';
import { ClickOutsideDirective } from '../shared/directives/click-outside.directive';
import { AriaConverterDirective } from '../shared/directives/aria-label-converter/aria-converter.directive';
import { ScrollIntoService } from '../shared/services/scroll-view/scroll-into.service';
import { TextSkillsService } from '../shared/services/text-data/text-skills.service';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ CommonModule, ClickOutsideDirective, AriaConverterDirective, MatTooltip],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  lightmodus = inject(LightDarkService);
  text = inject(TextSkillsService)
  showText = signal<{ frontend: number | null; backend: number | null }>({ frontend: null, backend: null });
  scrollService = inject(ScrollIntoService);
  renderer = inject(Renderer2);
  tooltipPosition = 'tooltip-right'
  
  imagesBackend = ['Python', 'Django', 'Linux', 'PostgreSQL', 'Cloud', 'SQLite', 'Docker', 'Redis', 'Celery'];
  imagesFrontend = ['Firebase', 'Angular', 'Scrum', 'Rest-Api', 'Git', 'HTML', 'JavaScript', 'CSS', 'TypeScript'];
  toggleSkills(){
    this.text.showFrontendSkills.set(!this.text.showFrontendSkills())
  }
  
  setFrontendText(index: number) {
    this.showText.set({ frontend: null, backend: null });
    this.showText.set({ frontend: index, backend: this.showText().backend });
  }

  setBackendText(index: number) {
    this.showText.set({ frontend: null, backend: null });
    this.showText.set({ frontend: this.showText().frontend, backend: index });
  }

 

  ngAfterViewInit() {
    setTimeout(() => {
    }, 100); 
  }

  hideText = () => {
   return  this.showText.set({ frontend: null, backend: null });
  }


}
