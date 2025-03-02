import { Component, inject } from '@angular/core';
import { CubeComponent } from "../shared/components/cube/cube.component";
import { CommonModule } from '@angular/common';
import { LightDarkService } from '../shared/services/lightmodus/light-dark.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CubeComponent, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  lightmodus = inject(LightDarkService);
  imagesFrontend = ['Firebase', 'Angular', 'Scrum', 'Rest-Api', 'Git', 'HTML', 'JavaScript', 'CSS', 'TypeScript', 'Material-Design'];

  skillCubesFrontend = this.imagesFrontend.map(skill => Array(6).fill(`/img/${skill.toLowerCase()}.png`));


  
}
