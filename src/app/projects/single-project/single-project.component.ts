import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, Input, ViewChildren } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LightDarkService } from '../../shared/services/lightmodus/light-dark.service';
import { ScrollIntoService } from '../../shared/services/scroll-view/scroll-into.service';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  @Input() project: any
  lightmodus = inject(LightDarkService)
  scrollService = inject(ScrollIntoService)
  

  scrollToTech(tech: any) {
    this.scrollService.scrollToElement(tech, 100);
  }
}
