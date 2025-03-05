import { Component, ElementRef, inject, Renderer2, signal, ViewChild } from '@angular/core';
import { CubeComponent } from "../shared/components/cube/cube.component";
import { CommonModule } from '@angular/common';
import { LightDarkService } from '../shared/services/lightmodus/light-dark.service';
import { ClickOutsideDirective } from '../shared/directives/click-outside.directive';
import { TextService } from '../shared/services/text-data/text.service';
import { AriaConverterDirective } from '../shared/directives/aria-label-converter/aria-converter.directive';
import { ScrollIntoService } from '../shared/services/scroll-view/scroll-into.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CubeComponent, CommonModule, ClickOutsideDirective, AriaConverterDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  lightmodus = inject(LightDarkService);
  text = inject(TextService)
  shownText = signal('');
  scrollService = inject(ScrollIntoService);
  renderer = inject(Renderer2);
  @ViewChild('buttonWrap', { static: true }) buttonWrap!: ElementRef;
  @ViewChild('cube', { static: true }) cube!: ElementRef;
  imagesFrontend = ['Firebase', 'Angular', 'Scrum', 'Rest-Api', 'Git', 'HTML', 'JavaScript', 'CSS', 'TypeScript', 'Material'];
  skillCubesFrontend = this.imagesFrontend.map(skill => Array(6).fill(`/img/${skill.toLowerCase()}.png`));
  imagesBackend = ['Python', 'Django', 'Linux', 'PostgreSQL', 'Cloud', 'SQLite', 'Docker', 'Redis', 'Celery'];
  skillCubesBackend= this.imagesBackend.map(skill => Array(6).fill(`/img/${skill.toLowerCase()}.png`));
  

  toggleSkills(){
    this.text.showFrontendSkills.set(!this.text.showFrontendSkills())
  }


  
  showText(skill: number) {
    if (skill !== -1) {
      if (this.text.showFrontendSkills()) {
        this.shownText.set(this.text.skillsText().cubeText()[skill]);
      } else {
        this.shownText.set(this.text.skillsText().cubeText()[skill]);
      }

      setTimeout(() => {
        this.scrollService.scrollToElement(this.buttonWrap, 150);
      }, 100);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.scrollService.observeElement(this.buttonWrap, this.renderer, 'animate-fade-from-right');
      this.scrollService.observeElement(this.cube, this.renderer, 'animate-fade-in-staggered');
    }, 100); 
  }
  


  hideText = () => {
    this.shownText.set('');
  }
}
