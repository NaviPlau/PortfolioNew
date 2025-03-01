import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LightDarkService } from '../../services/lightmodus/light-dark.service';

@Component({
  selector: 'app-checkmark',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkmark.component.html',
  styleUrl: './checkmark.component.scss'
})
export class CheckmarkComponent {
  lightmodus = inject(LightDarkService);
}
