import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LightDarkService } from '../../shared/services/lightmodus/light-dark.service';

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
}
