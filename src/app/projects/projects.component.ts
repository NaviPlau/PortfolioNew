import { Component, ElementRef, inject, Renderer2, signal, ViewChild } from '@angular/core';
import { LightDarkService } from '../shared/services/lightmodus/light-dark.service';
import { CommonModule } from '@angular/common';
import { TextProjectsService } from '../shared/services/text-data/text-projects.service';
import { SingleProjectComponent } from "./single-project/single-project.component";
import { ScrollIntoService } from '../shared/services/scroll-view/scroll-into.service';

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
  renderer: Renderer2 = inject(Renderer2);

  scrollService = inject(ScrollIntoService);

  @ViewChild('project', { static: true }) project!: ElementRef;
  @ViewChild('title', { static: true }) title!: ElementRef

  selectBackend() {
    this.text.selectedFrontend.set(false);
    this.text.selectProject(4);
  }

  selectFrontend() {
    this.text.selectedFrontend.set(true);
    this.text.selectProject(1);
  }

  ngAfterViewInit() {
    this.scrollService.observeElement(this.title, this.renderer, 'animate-fade-from-right');
    this.scrollService.observeElement(this.project, this.renderer, 'animate-project');
  }
}
