import { Component, inject, signal } from '@angular/core';
import { LightDarkService } from '../shared/services/lightmodus/light-dark.service';
import { CommonModule } from '@angular/common';
import { TextProjectsService } from '../shared/services/text-data/text-projects.service';
import { SingleProjectComponent } from "./single-project/single-project.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SingleProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  lightmodus = inject(LightDarkService);
  text = inject(TextProjectsService);
  selectedFrontend = signal(true);

  selectBackend() {
    this.selectedFrontend.set(false);
    this.text.selectProject(4);
  }

  selectFrontend() {
    this.selectedFrontend.set(true);
    this.text.selectProject(1);
  }
}
