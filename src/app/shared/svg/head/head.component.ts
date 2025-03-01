import { Component, inject } from '@angular/core';
import { LightDarkService } from '../../services/lightmodus/light-dark.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {
  lightmodus = inject(LightDarkService);
}
