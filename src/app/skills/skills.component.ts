import { Component, computed, inject, signal } from '@angular/core';
import { CubeComponent } from "../shared/components/cube/cube.component";
import { CommonModule } from '@angular/common';
import { LightDarkService } from '../shared/services/lightmodus/light-dark.service';
import { LangService } from '../shared/services/language/lang.service';
import { ClickOutsideDirective } from '../shared/directives/click-outside.directive';
import { TextService } from '../shared/services/text-data/text.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CubeComponent, CommonModule, ClickOutsideDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  lightmodus = inject(LightDarkService);
  lang = inject(LangService)
  text = inject(TextService)
  showFrontend = signal(true)
  shownText = signal('');

  imagesFrontend = ['Firebase', 'Angular', 'Scrum', 'Rest-Api', 'Git', 'HTML', 'JavaScript', 'CSS', 'TypeScript', 'Material'];
  skillCubesFrontend = this.imagesFrontend.map(skill => Array(6).fill(`/img/${skill.toLowerCase()}.png`));
  imagesBackend = ['Python', 'Django', 'Linux', 'PostgreSQL', 'Cloud', 'SQLite', 'Docker', 'Redis', 'Celery'];
  skillCubesBackend= this.imagesBackend.map(skill => Array(6).fill(`/img/${skill.toLowerCase()}.png`));
  textFrontend = computed(() => this.lang.language() === 'de' ? this.text.skillTextDeFront() : this.text.skillTextEnFront()); 
  textBackend = computed(() => this.lang.language() === 'de' ? this.text.skillTextDeBackend() : this.text.skillTextEnBackend());

  introText = computed(() => this.lang.language() === 'de' ? 'Meine Skills' : 'My Skills');
  standardText = computed(() => this.lang.language() === 'de' ? 'Klicken Sie auf ein Cube, um mehr zu erfahren.' : 'Click on a cube to learn more.');
  buttonText = computed(() => 
    this.lang.language() === 'de' 
      ? `Wechseln auf ${this.showFrontend() ? 'Backend' : 'Frontend'}` 
      : `Switch to ${this.showFrontend() ? 'Backend' : 'Frontend'}`
  );
  
  showText(skill: number) {
    if (skill !== -1) {
      if(this.showFrontend()){
        this.shownText.set(this.textFrontend()[skill])
      }
      if(!this.showFrontend()){
        this.shownText.set(this.textBackend()[skill])
      }
    }
  }

  hideText = () => {
    this.shownText.set('');
  }
}
